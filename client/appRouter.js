import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LoginLayout from "./layouts/loginLayout"
import App from "./layouts/app"
import Dashboard from "./modules/dashboard"

const AppRouter = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={LoginLayout} />
        <App>
          <Route path='/' exact component={Dashboard} />
        </App>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
