import React, { Component } from "react"
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom"
import LoginLayout from "./layouts/loginLayout"
import AppLayout from "./layouts/appLayout"
import NoMatchLayout from "./layouts/noMatchLayout"
import Dashboard from "./modules/dashboard"
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
            <Route path="/login" component={LoginLayout} langChangeCallback={this.langChange} />
            <Route path="/forgot_password" component={LoginLayout} langChangeCallback={this.langChange} />
            <Route path="/signup" component={LoginLayout} langChangeCallback={this.langChange} />
            { (Meteor.userId())?
              <AppLayout langChangeCallback={this.langChange} handleLogout={this.handleLogout}>
                <Route path="/" exact component={Dashboard} />
                <Route component={NoMatchLayout} />
              </AppLayout>:
              <Redirect to="/login" />
            }
            <Route component={NoMatchLayout} />
          </Switch>
        </BrowserRouter>
      }
    </span> 
  }
}

export default AppRouter
