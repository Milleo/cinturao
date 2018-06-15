import React, { Component } from "react"
import { Button } from "semantic-ui-react"

class Training extends Component{
  training = (e) => {
    e.preventDefault()

    Meteor.call("player.training");
  }

  render(){
    return <div>
      <h1>Training</h1>
      <Button content="Treinar" onClick={this.training} />
    </div>
  }
}

export default Training;
