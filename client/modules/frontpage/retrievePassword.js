import React, { Component } from "react"
import { Divider, Form, Header, Segment } from "semantic-ui-react"
import { Link } from "react-router-dom"
import T from "../../components/translation"

class RetrievePassword extends Component{
  render(){
    return <Segment>
      <Form>
        <p><T>login.retrieve.helpText</T></p>
        <Form.Input type="email" placeholder={i18n.__("common.email")} />
        <Form.Button fluid primary content={i18n.__("login.retrieve.button")} icon="mail" />
        <Form.Button fluid content={i18n.__("login.signup.button")} icon="pencil" />
        <Divider />
        <Link to="/login"><T>common.back</T></Link>
      </Form>
    </Segment>
  }
    
}

export default RetrievePassword
