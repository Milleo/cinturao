import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LoginLayout from "./layouts/loginLayout"
import Login from "./modules/frontpage/login"
import SignUp from "./modules/frontpage/signup"
import RetrievePassword from "./modules/frontpage/retrievePassword"
import AppLayout from "./layouts/appLayout"
import Dashboard from "./modules/dashboard"

const AppRouter = () => {
  return(
    <BrowserRouter>
      <Switch>
        <LoginLayout>
          <Route path="/login" component={Login} />
          <Route path="/esqueci_senha" component={RetrievePassword} />
          <Route path="/cadastro" component={SignUp} />
        </LoginLayout>
        <AppLayout>
          <Route path="/" exact component={Dashboard} />
        </AppLayout>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
