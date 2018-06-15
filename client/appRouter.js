import React, { Component } from "react"
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom"
import { withTracker } from "meteor/react-meteor-data"
import LoginLayout from "./layouts/loginLayout"
import AppLayout from "./layouts/appLayout"
import Login from "./modules/frontpage/login"
import RetrievePassword from "./modules/frontpage/retrievePassword"
import Signup from "./modules/frontpage/signup"
import NoMatchLayout from "./layouts/noMatchLayout"
import Dashboard from "./modules/dashboard"
import Sponsors from "./modules/sponsors"
import Fight from "./modules/fight"
import Training from "./modules/training"
import PlayerRegister from "./modules/player/register"
import i18n from "meteor/universe:i18n"

class AppRouter extends Component {
  constructor(props){
    super(props)

    this.state = {
      ready: false
    }
    this.langChange = this.langChange.bind(this)
  }

  loadTranslations(){
    const self = this
    i18n.setLocale("pt-BR").then(function(){
      self.setState({ ready: true })
    });
  }

  langChange(args){
    const selectedLang = args.value
    const self = this
    self.setState({ ready: false }, () => {
      i18n.setLocale(selectedLang).then(function(){
        self.setState({ ready: true })
      });
    });
  }

  handleLogout(){
    Meteor.logout()
    history.push("/login")
  }

  render(){
    if(!this.state.ready){
      this.loadTranslations()
    }

    return <span>
      {this.state.ready && 
        <BrowserRouter>
          <Switch>
            { (Meteor.userId())?
              <AppLayout langChangeCallback={this.langChange} handleLogout={this.handleLogout}>
                <Route path="/" exact component={Dashboard} />
                <Route path="/training" exact component={Training} />
                <Route path="/sponsors" exact component={Sponsors} />
                <Route path="/fight" exact component={Fight} />
                <Route path="/player/register" exact component={PlayerRegister} />
              </AppLayout>:
              <LoginLayout>
                <Route path="/login" component={Login} langChangeCallback={this.langChange} />
                <Route path="/forgot_password" component={RetrievePassword} langChangeCallback={this.langChange} />
                <Route path="/signup" component={Signup} langChangeCallback={this.langChange} />
                <Redirect to="/login" />
              </LoginLayout>
            }
          </Switch>
        </BrowserRouter>
      }
    </span> 
  }
}

export default AppRouter
