import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  Meteor.setInterval(() => {
    Meteor.users.update({ "profile.stamina": { $lt: 100 }}, { $inc: { "profile.stamina": 10 } } );
  }, 1000);  
});
