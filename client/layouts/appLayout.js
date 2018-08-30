import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { Container, Grid, Icon, Menu, Progress, Segment } from "semantic-ui-react"
import LanguageSelector from "../components/languageSelector"
import PlayerCard from "../components/PlayerCard"
import T from "../components/translation"
import { Link } from "react-router-dom"
import { withTracker } from "meteor/react-meteor-data"

class AppLayout extends Component{
  constructor(props){
    super(props)
  }
  
  componentWillMount(){
    if(this.props.user && this.props.user.profile.status == "new"){
      this.props.history.push("/player/register")
      return
    }
  }

  render(){
    if(!this.props.user)
      return <div />

    const { profile } = this.props.user

    return <Container>
      <Menu>
        <Menu.Item as={Link} to="/"><Icon name="home" /><T>menu.main</T></Menu.Item>
        { profile.status != "new" && <Menu.Item as={Link} to="/training"><Icon name="refresh" /><T>menu.training</T></Menu.Item> }
        { profile.status != "new" && <Menu.Item as={Link} to="/fight"><Icon name="trophy" /><T>menu.fight</T></Menu.Item> }
        { profile.status != "new" && <Menu.Item as={Link} to="/sponsors"><Icon name="tag" /><T>menu.sponsors</T></Menu.Item>}
        <Menu.Menu position="right">
          <LanguageSelector onChangeCallback={this.props.langChangeCallback} spaced={false} />
          <Menu.Item name="logout" onClick={this.props.handleLogout}><Icon name="sign out" /><T>menu.logout</T></Menu.Item>
        </Menu.Menu>
      </Menu>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={12}>
            <section id="main">
              {this.props.children}
            </section>
          </Grid.Column>
          <Grid.Column width={4}>
            <PlayerCard profile={profile} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  }
}

export default withTracker( (props) => {
  const user = Meteor.user()

  return { user }
})(withRouter(AppLayout))
