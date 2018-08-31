import React, { Component } from "react"
import { Button, Card } from "semantic-ui-react"
import T from "../components/Translation"

class Training extends Component{
  constructor(props){
    super(props)

    this.trainingRoutines = [
      { name: "training.list.reflexes", skill: "reflexes" },
      { name: "training.list.strenght", skill: "strength"  },
      { name: "training.list.endurance", skill: "endurance"  }
    ]
  }

  handleTraining = (skill) => {
    Meteor.call("player.training", skill)
  }

  renderTrainings(){
    return <Card.Group itemsPerRow={3}>
      {this.trainingRoutines.map((item) => {
        return <Card>
          <Card.Content>
            <Card.Header><T>{item.name}</T></Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Button fluid positive content="Treinar" onClick={() => this.handleTraining(item.skill)} />
          </Card.Content>
        </Card> 
      })}
    </Card.Group>
  }

  render(){
    return <div>
      <h1><T>training.title</T></h1>
      {this.renderTrainings()}
    </div>
  }
}

export default Training;
