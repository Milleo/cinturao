import React, { Component } from "react"
import { Segment, Progress } from "semantic-ui-react"

class PlayerCard extends Component{
  render(){
    const { profile } = this.props;
    return ( profile.status != "new" && <Segment>
      <Progress value={profile.stamina} total={100} color="red" size="tiny">Stamina</Progress>
      <Progress value={profile.xp} total={100} size="tiny">Level { profile.level } </Progress>
    </Segment> );
  }
}

export default PlayerCard
