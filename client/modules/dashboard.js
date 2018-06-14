import React, { Component } from "react"
import { Button } from "semantic-ui-react"

class Dashboard extends Component{
  training = (e) => {
    e.preventDefault()

    Meteor.call("player.training");
  }
  render(){
    return <div>
      <h1>Dashboard</h1>
      <Button content="Treinar" onClick={this.training} />
    </div>
  }
}

export default Dashboard
