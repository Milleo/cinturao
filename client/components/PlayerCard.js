import React, { Component } from "react"
import { Segment, Progress } from "semantic-ui-react"
import { totalXpByLevel } from "../../imports/settings"

class PlayerCard extends Component{
  render(){
    const { profile } = this.props
    return ( profile.status != "new" && <Segment>
      <Progress value={profile.stamina} total={100} color="red" size="tiny">Stamina</Progress>
      <Progress value={profile.xp} total={totalXpByLevel(profile.level)} size="tiny">Level { profile.level } </Progress>
    </Segment> );
  }
}

export default PlayerCard
