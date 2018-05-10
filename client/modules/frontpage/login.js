import React, { Component } from "react"
import { Button, Divider, Form, Segment } from "semantic-ui-react"
import { Link } from "react-router-dom"
import T from "../../components/translation"
import Validator from "../../libs/validator"
import Messages from "../../components/messages"

class Login extends Component{
  constructor(props){
    super(props)

    this.state = {
      "login": "",
      "password": ""
    }

    if(this.props.location.state){
      this.state.messages = this.props.location.state.messages
    }
  }

  handleSignIn = (e) => {
    e.preventDefault()

    this.setState({ messages: {} })    
 
    const form = {
      "login": {
        label: i18n.__("common.email"),
        rules: ["required", "isEmail"],
        value: this.state.login
      },
      "password": {
        label: i18n.__("common.password"),
        rules: ["required", "isLength[8,60]"],
        value: this.state.password
      }
    }
    
    const result = Validator(form)
    if(result.valid){
      const history = this.props.history
      const self = this
      Meteor.loginWithPassword(form.login.value, form.password.value, function(error){
        if(!error){
          history.push("/")
        }else{
          self.setState({ messages: { type: "error", content: i18n.__("login.invalidLogin") }})
        }
      })
    }else{
      this.setState({ messages: { type: "error", content: result.errors }})
    }
  }

  handleValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
 
  render(){
    return <div>
      <Segment>
        <Form>
          { this.state.messages && <Messages messages={ this.state.messages } /> }
          <Form.Input maxLength="75" type="email" placeholder={i18n.__("common.email")} onChange={this.handleValueChange} name="login" />
          <Form.Input maxLength="50" type="password" placeholder={i18n.__("common.password")} onChange={this.handleValueChange} name="password" />
          <Form.Button fluid primary content={i18n.__("login.signin")} icon="sign in" onClick={ this.handleSignIn } />
          <Button as={Link} to="/signup" fluid={true} control="a" content={i18n.__("login.signup.button")} icon="pencil" />
          <Divider />
          <Link to="/forgot_password"><T>login.forgot_password.link</T></Link>
        </Form>
      </Segment>
    </div>
  }
}

export default Login
