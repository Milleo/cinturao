import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LoginLayout from "./layouts/loginLayout"
import Login from "./modules/frontpage/login"
import SignUp from "./modules/frontpage/signup"
import RetrievePassword from "./modules/frontpage/retrievePassword"
import AppLayout from "./layouts/appLayout"
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

  render(){
    if(!this.state.ready){
      this.loadTranslations()
    }

    return <span>
      {this.state.ready && 
        <BrowserRouter>
          <Switch>
            <LoginLayout langChangeCallback={this.langChange}>
              <Route path="/login" component={Login} />
              <Route path="/forgot_password" component={RetrievePassword} />
              <Route path="/signup" component={SignUp} />
            </LoginLayout>
            <AppLayout>
              <Route path="/" exact component={Dashboard} />
            </AppLayout>
          </Switch>
        </BrowserRouter>
      }
    </span> 
  }
}

export default AppRouter
