import React, { Component } from "react"
import ReactDOM from "react-dom"
import AppRouter from "./appRouter"

Meteor.startup( () => {
  ReactDOM.render(<AppRouter />, document.querySelector("#app-container"))
});

