import React, { Component } from "react"
import { Button, Divider, Form, Header, Message, Segment } from "semantic-ui-react"
import { browserHistory } from "react-router"
import { Link } from "react-router-dom"
import Validator from "../../libs/validator"
import Messages from "../../components/Messages"

class Signup extends Component{
  constructor(props){
    super(props)
    
    this.state = {
      "name": "",
      "username": "",
      "email": "",
      "password": "",
      "confirmPassword": ""
    }
  } 
  handleSignUpSubmit = () => {
    const form = {
      "username": {
        label: i18n.__("common.username"),
        rules: ["required"],
        value: this.state.username
      },
      "name": {
        label: i18n.__("common.name"),
        rules: ["required" ],
        value: this.state.name
      },

      "email": {
        label: i18n.__("common.email"),
        rules: ["required", "isEmail"],
        value: this.state.email
      },
      "password": {
        label: i18n.__("common.password"),
        rules: ["required", "isLength[8,60]"],
        value: this.state.password
      },
      "confirmPassword": {
        label: i18n.__("login.signup.passwordConfirm"),
        rules: ["required", "equals[password]"],
        value: this.state.confirmPassword 
      }
    }

    const result = Validator(form)
    if(result.valid){    
      Accounts.createUser({
        email: this.state.email,
        name: this.state.name,
        username: this.state.username,
        password: this.state.password
      }, (error) => {
        if(!error)
          this.props.history.push("/player/register")
        else
          this.setState({ messages: { type: "error", content: error.reason  }})
      });


    }else{
      this.setState({ messages: { type: "error", content: result.errors }})
    }
  }

  handleValueChange = (e) => {
    const fieldName = e.target.name

    if(fieldName == "username" || fieldName == "email"){
      if(fieldName == "username"){
        this.setState({ messageUsername: null, userUniqueLoad: true })
      }else{
        this.setState({ messageEmail: null , emailUniqueLoad: true})
      }

      Meteor.call("player.checkUnique", fieldName, e.target.value, (err, result) => {
        if(!result){
          if(fieldName == "username"){
            const label = i18n.__("common.username")
            this.setState({
              messageUsername: i18n.__("validations.uniqueUsername", { label }),
              userUniqueLoad: false
            })
          }else{
            const label = i18n.__("common.email")
            this.setState({
              messageEmail: i18n.__("validations.unique", { label }),
              emailUniqueLoad: false
            })
          }
        }else{
          if(fieldName == "username"){
            this.setState({
              validUsername: true, 
              userUniqueLoad: false
            })
          }else{
            this.setState({
              validEmail: true,
              userUniqueLoad: false
            })
          }
        }
      })
    }

    this.setState({
      [fieldName]: e.target.value
    })
  }

  render(){
    return <Segment>
      <Form>
        { this.state.messages && <Messages messages={ this.state.messages } /> }
        <Form.Group widths="equal">  
          <Form.Field>
            <Form.Input name="name" label={i18n.__("common.name")} fluid  onChange={ this.handleValueChange }/>
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">  
          <Form.Field>
            <Form.Input name="username" label={i18n.__("common.username")} fluid  onChange={ this.handleValueChange } loading={this.state.userUniqueLoad} />
            <Message negative size="tiny" content={this.state.messageUsername} hidden={!this.state.messageUsername } />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">  
          <Form.Field>
            <Form.Input name="email" label={i18n.__("common.email")} fluid type="email"  onChange={ this.handleValueChange } loading={this.state.emailUniqueLoad} />
            <Message negative size="tiny" content={this.state.messageEmail} hidden={!this.state.messageEmail } />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">  
          <Form.Field>
            <Form.Input name="password" label={i18n.__("common.password")} fluid type="password"  onChange={ this.handleValueChange }/>
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">  
          <Form.Field>
            <Form.Input name="confirmPassword" label={i18n.__("login.signup.passwordConfirm")} fluid type="password"  onChange={ this.handleValueChange }/>
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">  
          <Form.Field>
            <Button type="button" positive icon="check" content={i18n.__("login.signup.button")} fluid onClick={ this.handleSignUpSubmit } />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <Button as={Link} to="/login" icon="chevron left" content={i18n.__("common.back")} fluid />
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  }
}

export default Signup
