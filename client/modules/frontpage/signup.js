import React, { Component } from "react"
import { Button, Divider, Form, Header, Segment } from "semantic-ui-react"
import { browserHistory } from "react-router"
import { Link } from "react-router-dom"
import Validator from "../../libs/validator"
import Messages from "../../components/messages"

class Signup extends Component{
  constructor(props){
    super(props)
    
    this.state = {
      "name": "",
      "email": "",
      "password": "",
      "confirmPassword": ""
    }
  } 
  handleSignUpSubmit = () => {
    const form = {
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
        password: this.state.password
      });

      this.props.history.push("/login", { messages: { type: "success", content: i18n.__("login.signup.successMessage") } })
    }else{
      this.setState({ messages: { type: "error", content: result.errors }})
    }
  }

  handleValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
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
            <Form.Input name="email" label={i18n.__("common.email")} fluid type="email"  onChange={ this.handleValueChange }/>
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
