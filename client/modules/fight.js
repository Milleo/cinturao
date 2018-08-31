import React, { Component } from "react"
import { Button } from "semantic-ui-react"
import PlayerSearchBar from "../components/PlayerSearchBar"

class Fight extends Component{
    
  render(){
    return <div>
      <PlayerSearchBar />
      <Button content="Marcar uma luta" disabled={this.props.ableToFight} />
    </div>
  }
}

export default Fight
