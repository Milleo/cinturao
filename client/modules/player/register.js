import React, { Component } from "react"
import { Button, Divider, Grid, Form, Input } from "semantic-ui-react"
import T from "../../components/translation"
import { game } from "../../../imports/settings"

class PlayerRegister extends Component{
  constructor(props){
    super(props);
    this.state = {remainingPoints: props.startingPoints, ...props};
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
      <h1><T>player.register.title</T></h1>
      <Divider />
      <Grid width={8} textAlign="center">
        <Form width={8}>
          <div>
            <h2><T>player.register.playerInfo</T></h2>
            <Form.Field>
              <label><T>player.register.weight</T></label>
              <Input name="weight" type="number" min={50} max={120} label="Kg" defaultValue="75" labelPosition="right" />
            </Form.Field>
            <Form.Field>
              <label><T>player.register.age</T></label>
              <Input name="age" type="number" min={18} max={50} label={i18n.__("player.register.years")} defaultValue="30" labelPosition="right" />
            </Form.Field>
            <Form.Field>
              <label><T>player.register.gender</T></label>
              <Form.Dropdown options={[{"value": "male", "text": i18n.__("player.register.genders.male")}, {"value": "female", "text": i18n.__("player.register.genders.female")}]} value={this.state.gender} selection fluid onChange={this.handleGenderChange} />
            </Form.Field>
          </div>
          <Divider />
          <div>
            <h2><T>player.register.skills</T></h2>
            <p>{i18n.__("player.register.message.points", { points: this.state.remainingPoints })}</p>
            <Form.Field>
              <label><T>player.register.endurance</T> ({this.state.endurance})</label>
              <Input type="range" min={0} max={10} name="endurance" onChange={this.handleSkillChange} value={this.state.endurance} />
            </Form.Field>
            <Form.Field>
              <label><T>player.register.strenght</T> ({this.state.strength})</label>
              <Input type="range" min={0} max={10} name="strength" onChange={this.handleSkillChange} value={this.state.strength} />
            </Form.Field>
            <Form.Field>
              <label><T>player.register.reflexes</T> ({this.state.reflexes})</label>
              <Input type="range" min={0} max={10} name="reflexes" onChange={this.handleSkillChange} value={this.state.reflexes} />
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
  gender: "male"
};

export default PlayerRegister;
