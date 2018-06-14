import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { Container, Icon, Menu, Progress } from "semantic-ui-react"
import LanguageSelector from "../components/languageSelector"
import T from "../components/translation"
import { Link } from "react-router-dom"
import { withTracker } from "meteor/react-meteor-data"

class AppLayout extends Component{
  constructor(props){
    super(props)
  }

 
  render(){
    if(!this.props.user)
      return <div />

    const { profile } = this.props.user

    return <Container>
      <Menu>
        <Menu.Item as={Link} to="/"><T>menu.main</T></Menu.Item>
        <Menu.Item as={Link} to="/training"><T>menu.training</T></Menu.Item>
        <Menu.Item as={Link} to="/fight"><T>menu.fight</T></Menu.Item>
        <Menu.Item as={Link} to="/sponsors"><T>menu.sponsors</T></Menu.Item>
        <Menu.Menu position="right">
          <LanguageSelector onChangeCallback={this.props.langChangeCallback} spaced={false} />
          <Menu.Item name="logout" onClick={this.props.handleLogout}><Icon name="sign out" /><T>menu.logout</T></Menu.Item>
        </Menu.Menu>
      </Menu>
      <section id="main">
        <Progress value={profile.stamina} total={100} color="red" size="tiny">Stamina</Progress>
        <Progress value={profile.xp} total={100} size="tiny">Level { profile.level } </Progress>
        {this.props.children}
      </section>
    </Container>
  }
}

export default withTracker( (props) => {
  const user = Meteor.user()

  return { user }
})(AppLayout)
