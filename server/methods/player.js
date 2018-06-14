calculateLevel = ( { level, xp, xpTotal, stamina }, sumPoints ) => {
  xpTotal += sumPoints
  xp += sumPoints

  stamina = stamina - 20
  if(stamina < 0)
    return false;

  if(xp > 100){
    level++
    xp = 0
  }

  return { level, xp, xpTotal, stamina }

}

Meteor.methods({
  "player.training": () => {
    const { profile } = Meteor.user()
    const TRAINING_FACTOR = 10

    if(profile.stamina == 0)
      return false
    
    if(profile.stamina > 100)
      profile.stamina = 100

    const result = calculateLevel( profile,  TRAINING_FACTOR )
    if(result != false){
      const newLevel = result.level
      const newXp = result.xp 
      const newXpTotal = result.xpTotal 
      const newStamina = result.stamina

      Meteor.users.update(Meteor.userId(), {
        $set: {
          profile: {
            "level": newLevel,
            "xp": newXp,
            "xpTotal": newXpTotal,
            "stamina": newStamina
          }
        }
      })
    }
  }
});
