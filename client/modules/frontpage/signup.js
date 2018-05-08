import React, { Component } from "react"
import { Button, Divider, Form, Header, Segment } from "semantic-ui-react"

class Signup extends Component{
  
  render(){
    return <Segment>
      <Form>
        <Form.Group widths="equal">  
          <Form.Field>
            <Form.Input name="nome" label="Nome" fluid />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">  
          <Form.Field>
            <Form.Input name="email" label="E-mail" fluid type="email" />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">  
          <Form.Field>
            <Form.Input name="password" label="Senha" fluid type="password" />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">  
          <Form.Field>
            <Form.Input name="confirmPassword" label="Confirmar Senha" fluid type="password" />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">  
          <Form.Field>
            <Button positive icon="check" content="Cadastrar" fluid />
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  }
    
}

export default Signup
