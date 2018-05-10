import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import Meteor from "meteor/meteor"
import { Container, Icon, Menu } from "semantic-ui-react"
import LanguageSelector from "../components/languageSelector"
import T from "../components/translation"
import { Link } from "react-router-dom"

class AppLayout extends Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return <Container>
      <Menu>
        <Menu.Item as={Link} to="/"><T>menu.main</T></Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="logout" onClick={this.props.handleLogout}><Icon name="sign out" /><T>menu.logout</T></Menu.Item>
          <LanguageSelector onChangeCallback={this.props.langChangeCallback} spaced={false} />
        </Menu.Menu>
      </Menu>
      <section id="main">
        {this.props.children}
      </section>
    </Container>
  }
}

export default AppLayout
