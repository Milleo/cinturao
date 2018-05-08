import React, { Component } from "react"
import { Divider, Form, Header, Segment } from "semantic-ui-react"
import { Link } from "react-router-dom"

class RetrievePassword extends Component{
  render(){
    return <div>
      <Header as="h1" textAlign="center">Teste</Header>
      <Segment>
        <Form>
          <p>Insira seu e-mail para recuperar sua senha</p>
          <Form.Input type="email" placeholder="E-mail" />
          <Form.Button fluid primary content="Recuperar Senha" icon="mail" />
          <Form.Button fluid content="Cadastre-se" icon="pencil" />
          <Divider />
          <Link to="/login">Voltar</Link>
        </Form>
      </Segment>
    </div>
  }
    
}

export default RetrievePassword
