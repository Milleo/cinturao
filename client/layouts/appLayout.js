import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import Meteor from "meteor/meteor"

class AppLayout extends Component{
  constructor(props){
    super(props)
  }
  // @TODO Remove login check from here
  componentWillMount(){
    if(!!Meteor.userId === false){
      this.props.history.push("/login");
    }
  }

  
  render(){
    return <h1>aaaaaaaaa</h1>
  }
}

export default withRouter(AppLayout)