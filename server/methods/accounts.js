Accounts.onCreateUser(function(options, user){
  user.profile = {};
  user.profile["name"] = options.name
  user.profile["level"] = 0
  user.profile["victories"] = 0
  user.profile["defeats"] = 0
  user.profile["xp"] = 0
  user.profile["xp_total"] = 0
  user.profile["stamina"] = 100
  
  return user
});
