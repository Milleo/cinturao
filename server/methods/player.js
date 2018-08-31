import validator from "validator"
import PlayerRegisterValidator from "../validators/PlayerRegisterValidator"
import { game, totalXpByLevel, trainingRoutines } from "../../imports/settings"

/* Calculate the level upgrade */
trainingRoutine = ( profile, skill ) => {
  const XP_GAIN = 10
  const STAMINA_COST = 20
  const xp_next_level = totalXpByLevel(profile.level)

  if(!trainingRoutines.hasOwnProperty(skill))
    return false

  profile.stamina = profile.stamina - STAMINA_COST
  if(profile.stamina < 0)
    return false

  profile.xp_total += XP_GAIN

  if(profile.xp_total > totalXpByLevel(profile.level)){
    profile.xp = profile.xp_total - totalXpByLevel(profile.level)
    profile.level++
  }else{
    profile.xp += XP_GAIN
  }

  /*const training = trainingRoutines[skill]
  if(training.hasOwnProperty(factor)){
    if(factor.type == "weight")
      result = 
  }*/
  
  return profile
}

Meteor.methods({
  "player.training": (skill) => {
    check(skill, String)
    const { profile } = Meteor.user()
    
    if(profile.stamina == 0) return false
    if(profile.stamina > 100) profile.stamina = 100

    const result = trainingRoutine(profile, skill)

    if(result != false){
      profile.level = result.level
      profile.xp = result.xp 
      profile.xp_total = result.xp_total 
      profile.stamina = result.stamina

      Meteor.users.update(Meteor.userId(), {
        $set: {
          profile
        }
      })
    }
  },
  "player.register": (data) => {
    check(data, Object)

    const errors = PlayerRegisterValidator(data)
    if(errors.length > 0)
      throw new Meteor.Error(400, "Error 400: invalid request", errors)

    Meteor.users.update(Meteor.userId(), {
      $set: {
        profile: {
          skills: {
            endurance: data.endurance,
            reflexes: data.reflexes,
            strength: data.strength
          },
          status: "active",
          gender: data.gender,
          weigth: data.weigth,
          age: data.age,
          level: 1,
          victories: 0,
          defeats: 0,
          xp: 0,
          xp_total: 0,
          stamina: 100,
          category: "amateur"

        }
      }
    })

    return {type: "success", content:"Registro realiazado com sucesso"}
  },
  "player.search": (query) => {
    check(query, String)
    const usersFound = Meteor.users.find({ username: new RegExp(query, "i") }).fetch()
    return usersFound
  }
});
