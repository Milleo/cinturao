import React, { Component } from "react"
import { Divider, Grid, Form, Segment } from "semantic-ui-react"
import { Link } from "react-router-dom"

class Login extends Component{
  render(){
    return <Grid verticalAlign="middle" centered divided="vertically" style={{ height: "100%" }}>
      <Grid.Row>
        <Grid.Column width={4}>
          <Segment>
            <Form>
              <Form.Input type="email" placeholder="E-mail" />
              <Form.Input type="password" placeholder="Senha" />
              <Form.Button fluid color="primary" content="Entrar" icon="sign in" />
              <Form.Button fluid color="primary" content="Cadastrar-se" icon="pencil" />
              <Divider />
              <Link to="/esqueci_senha">Esqueci minha senha</Link>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>;
  }
}

export default Login
