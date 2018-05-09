Accounts.onCreateUser(function(options, user){
  user.profile = {};
  user.profile['name'] = options.name
  
  return user
});