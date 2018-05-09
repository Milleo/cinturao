import React, { Component } from "react"
import { Button, Divider, Form, Header, Segment } from "semantic-ui-react"
import SignUpValidator from "../../validators/signup.validator"
import { browserHistory } from "react-router"
import { Link } from "react-router-dom"

class Signup extends Component{
  
  handleSignUpSubmit = () => {
    const errors = SignUpValidator(this.state);
    
    if(errors.length == 0){
      Accounts.createUser({
        email: this.state.email,
        name: this.state.name,
        password: this.state.password
      });

      this.props.history.push("/login")
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
            <Button as={Link} to="/login" icon="chevron left" content={i18n.__("common.back")} fluid />
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  }
}

export default Signup
