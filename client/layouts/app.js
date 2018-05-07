import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import Meteor from "meteor/meteor"

class App extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    if(!!Meteor.userId === false){
      this.props.history.push("/login");
    }
  }

  
  render(){
    return <h1>aaaaaaaaa</h1>
  }
}

export default withRouter(App)
