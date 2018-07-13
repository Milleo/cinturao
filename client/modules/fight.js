import React, { Component } from "react"

class Fight extends Component{
    
  render(){
    return <div>
      <Button content="Marcar uma luta" disabled={this.props.ableToFight} />
    </div>
  }
}

export default Fight;
