/* Profile object specification
 * for the Accounts module from Meteor */

Accounts.onCreateUser(function(options, user){
  user.profile = {};
  user.profile["status"] = "new"
  user.profile["name"] = options.name
  user.profile["level"] = 0
  user.profile["victories"] = 0
  user.profile["defeats"] = 0
  user.profile["xp"] = 0
  user.profile["xp_total"] = 0
  user.profile["stamina"] = 100
  user.profile["sex"] = "male"
  user.profile["category"] = "amateur"
  user.profile["skills"] = {
    "endurace": 0,
    "strenght": 0,
    "reflexes": 0
  }
  
  return user
});
