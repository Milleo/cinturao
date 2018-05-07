import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./layouts/login"
import App from "./layouts/app"
import Dashboard from "./modules/dashboard"

const AppRouter = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <App>
          <Route path='/' exact component={Dashboard} />
        </App>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
