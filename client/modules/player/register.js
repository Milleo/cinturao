import React, { Component } from "react"
import { Button, Divider, Grid, Form, Input } from "semantic-ui-react"
import T from "../../components/translation"
import { game } from "../../../imports/settings"
import Messages from "../../components/messages"

class PlayerRegister extends Component{
  constructor(props){
    super(props);
    this.state = {remainingPoints: props.startingPoints, ...props}
    this.genderOptions = []

    for(i in game.genders){
      const gender = game.genders[i]
      this.genderOptions.push({ value: gender, text: i18n.__("player.register.genders." + gender)});
    }
  }

  handleSave = () => {
    const saveData = { gender: this.state.gender,
      age: this.state.age,
      weight: this.state.weight,
      reflexes: this.state.reflexes,
      strength: this.state.strength,
      endurance: this.state.endurance };

    Meteor.call("player.register", saveData, (err, resp) => {
      if(err){
        this.setState({messages: {type: "error", content: err.details }});
        return
      }
      this.setState({ messages: resp });
    })
  }

  /* TODO: Adapt the random values to the game settings constants */
  randomize = () => {
    this.setState({
      age: (Math.floor(Math.random() * 32) + 18),
      weight: (Math.floor(Math.random() * 70) + 50),
      gender: (Math.random() <= 0.5?"male":"female")
    });
    /* TODO: Make all skills points used */
    this.handleSkillChange({ target: { name: "reflexes", value: (Math.random() * 10)}});
    this.handleSkillChange({ target: { name: "strength", value: (Math.random() * 10)}});
    this.handleSkillChange({ target: { name: "endurance", value: (Math.random() * 10)}});
  }

  handleGenderChange = (e, target) => {
    this.setState({
      gender: target.value
    });
  };

  handleSkillChange = ({target}) => {
    const sumValues = {
      "reflexes": this.state.reflexes,
      "strength": this.state.strength,
      "endurance": this.state.endurance
    };
    sumValues[target.name] = target.value;

    let usedPoints = 0;
    for(let key of Object.keys(sumValues)){
      usedPoints += parseInt(sumValues[key]);
    }

    const subTotal = (this.state.startingPoints - usedPoints);
    if(subTotal >= 0){
      this.setState({
        [target.name]: parseInt(target.value),
        remainingPoints: subTotal
      });
    }
  }

  render(){
    return <div>
      <Grid width={8}>
        <Form width={8}>
          <div>
            <h1><T>player.register.title</T></h1>
            { this.state.messages && <Messages messages={ this.state.messages } /> }
            <h2><T>player.register.playerInfo</T></h2>
            <Form.Field>
              <label><T>player.register.weight</T></label>
              <Input name="weight" type="number" min={game.minWeight} max={game.maxWeight} label="Kg" value={this.state.weight} labelPosition="right" />
            </Form.Field>
            <Form.Field>
              <label><T>player.register.age</T></label>
              <Input name="age" type="number" min={game.minAge} max={game.maxAge} label={i18n.__("player.register.years")} value={this.state.age} labelPosition="right" />
            </Form.Field>
            <Form.Field>
              <label><T>player.register.gender</T></label>
              <Form.Dropdown options={this.genderOptions} value={this.state.gender} selection fluid onChange={this.handleGenderChange} />
            </Form.Field>
          </div>
          <Divider />
          <div>
            <h2><T>player.register.skills</T></h2>
            <p>{i18n.__("player.register.message.points", { points: this.state.remainingPoints })}</p>
            <Form.Field>
              <label><T>player.register.endurance</T> ({this.state.endurance})</label>
              <Input type="range" min={game.minInitialSkill} max={game.maxInitialSkill} name="endurance" onChange={this.handleSkillChange} value={this.state.endurance} />
            </Form.Field>
            <Form.Field>
              <label><T>player.register.strenght</T> ({this.state.strength})</label>
              <Input type="range" min={game.minInitialSkill} max={game.maxInitialSkill} name="strength" onChange={this.handleSkillChange} value={this.state.strength} />
            </Form.Field>
            <Form.Field>
              <label><T>player.register.reflexes</T> ({this.state.reflexes})</label>
              <Input type="range" min={game.minInitialSkill} max={game.maxInitialSkill} name="reflexes" onChange={this.handleSkillChange} value={this.state.reflexes} />
            </Form.Field>
          </div>
          <Divider />
          <Button positive content={i18n.__("common.save")} onClick={this.handleSave} />
          <Button content={i18n.__("common.random")} onClick={this.randomize} />
        </Form>
      </Grid>
    </div>
  }
}

PlayerRegister.defaultProps = {
  startingPoints: game.startingPoints,
  endurance: 0,
  strength: 0,
  reflexes: 0,
  gender: "male",
  age: 30,
  weight: 75
};

export default PlayerRegister;
