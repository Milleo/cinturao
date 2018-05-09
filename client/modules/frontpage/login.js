import React, { Component } from "react"
import { Button, Divider, Form, Segment } from "semantic-ui-react"
import { Link } from "react-router-dom"
import T from "../../components/translation"
import validator from "validator"

class Login extends Component{
  handleSignIn = () => {
    console.log(validator.isEmail(this.state.login));
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
