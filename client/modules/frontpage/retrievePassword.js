import React, { Component } from "react"
import { Button, Divider, Form, Header, Segment } from "semantic-ui-react"
import { Link } from "react-router-dom"
import T from "../../components/translation"
import Messages from "../../components/messages"
import Validator from "../../libs/validator"

class RetrievePassword extends Component{
  constructor(props){
    super(props)

    this.state = { "login": "" }
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const form = {
      "login": {
        label: i18n.__("common.email"),
        rules: ["isEmail", "required"],
        value: this.state.login
      }
    }

    const result = Validator(form)
    if(result.valid){
      if(Meteor.users.find({ "emails.address": form.login.value }).fetch().length == 1){
        const history = this.props.history
        Accounts.forgotPassword(form.login.value, () => {
          history.push("/login", { messages: { type: "success", content: i18n.__("login.retrieve.successMessage") } })
        })
      }else{
        this.setState({ messages: { type: "error", content: i18n.__("login.retrieve.userNotFound") }})
      }
    }else{
      this.setState({ messages: { type: "error", content: result.errors } })
    }
  }

  handleValueChange = (e) => {
    this.setState({
      login: e.target.value
    })
  }

  render(){
    return <Segment>
      <Form>
        { this.state.messages && <Messages messages={ this.state.messages } /> }
        <p><T>login.retrieve.helpText</T></p>
        <Form.Input type="email" placeholder={i18n.__("common.email")} name="login" onChange={this.handleValueChange} />
        <Form.Button fluid primary content={i18n.__("login.retrieve.button")} icon="mail" onClick={ this.handleSubmit } />
        <Button as={Link} to="/login" fluid content={i18n.__("login.signup.button")} icon="pencil" />
        <Divider />
        <Link to="/login"><T>common.back</T></Link>
      </Form>
    </Segment>
  }
    
}

export default RetrievePassword
