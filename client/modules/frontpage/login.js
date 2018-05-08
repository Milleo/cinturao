import React, { Component } from "react"
import { Button, Divider, Form, Header, Segment } from "semantic-ui-react"
import { Link } from "react-router-dom"
import i18n from "meteor/universe:i18n"

class Login extends Component{
  render(){
    return <div>
      <Header as="h1" textAlign="center">{i18n.__("title")}</Header>
      <Segment>
        <Form>
          <Form.Input type="email" placeholder="E-mail" />
          <Form.Input type="password" placeholder="Senha" />
          <Form.Button fluid primary content="Entrar" icon="sign in" />
          <Button as={Link} to="/cadastro" fluid={true} control="a" content="Cadastre-se" icon="pencil" />
          <Divider />
          <Link to="/esqueci_senha">Esqueci minha senha</Link>
        </Form>
      </Segment>
    </div>
  }
}

export default Login
