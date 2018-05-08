import React, { Component } from "react"
import { Grid } from "semantic-ui-react"
import { Link } from "react-router-dom"

class Login extends Component{
  render(){
    return <Grid verticalAlign="middle" centered divided="vertically" style={{ height: "100%" }}>
      <Grid.Row>
        <Grid.Column width={4}>
          {this.props.children}
        </Grid.Column>
      </Grid.Row>
    </Grid>;
  }
}

export default Login
