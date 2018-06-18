import validator from "validator"
import { game } from "../../imports/settings"

const PlayerRegisterValidator = (data) => {
  const requiredFields = ["age", "weight", "gender", "reflexes", "strength", "endurance"]
  let errors = []

  /* Stage 1: All fields are here */
  for(index in requiredFields){
    const field = requiredFields[index]
    if(!(field in data)){
      errors.push("Field " + field + " not found")
    }else{
      data[field] = data[field] + ""
    }
  }

  /* Stage 2: Field specific validation */
  if(errors.length == 0){
    if(!validator.isInt(data.age, { gt: game.minAge, lt: game.maxAge})) errors.push("Field age is not valid")
    if(!validator.isInt(data.weight, { gt: game.minWeight, lt: game.maxWeight})) errors.push("Field weight is not valid")
    if(!validator.isIn(data.gender, game.genders)) errors.push("Field gender is not valid")
    if(!validator.isInt(data.reflexes, { gt: game.minInitialSkill, lt: game.maxInitialSkill})) errors.push("Field reflexes is not valid")
    if(!validator.isInt(data.strength, { gt: game.minInitialSkill, lt: game.maxInitialSkill})) errors.push("Field strength is not valid")
    if(!validator.isInt(data.endurance, { gt: game.minInitialSkill, lt: game.maxInitialSkill})) errors.push("Field endurance is not valid")

    /* Stage 3: Check the sum of skills */
    if(errors.length == 0){
      let statusPointsSum = parseInt(data.reflexes) + parseInt(data.strength) + parseInt(data.endurance)

      if(statusPointsSum > game.startingPoints){
        errors.push("Incorrect sum of skills points")
      }
    }
  }
  
  return errors;
}


export default PlayerRegisterValidator
