import React, { Component } from "react"
import { Grid } from "semantic-ui-react"
import { Link } from "react-router-dom"
import LanguageSelector from "../components/languageSelector"

class Login extends Component{
  render(){
    return <span>
      <LanguageSelector onChangeCallback={this.props.langChangeCallback} />
      <Grid verticalAlign="middle" centered style={{ height: "100%" }}>
        <Grid.Column width={5}>
          {this.props.children}
        </Grid.Column>
      </Grid>
    </span>;
  }
}

export default Login
