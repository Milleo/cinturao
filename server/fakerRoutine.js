import faker from "faker/locale/pt_BR"
import { game } from "../imports/settings"

const randNumber = (min, max) => {
  return (Math.floor(Math.random() * max) + min)
}

Meteor.startup(() => {
  const users = Meteor.users.find({}).fetch()
  

  if(users.length < 3){
    for(i = 0; i < 500; i++){
      faker.seed(i)
      const userId = Accounts.createUser({
        email: faker.internet.email(),
        username: faker.internet.userName()
      })
      const profile = {
        skills: {
          endurance: randNumber(game.minInitialSkill, game.maxInitialSkill),
          reflexes: randNumber(game.minInitialSkill, game.maxInitialSkill),
          strength: randNumber(game.minInitialSkill, game.maxInitialSkill)
        },
        status: "active",
        gender: (faker.random.boolean)?"M":"F",
        weigth: randNumber(game.minWeight, game.maxWeight),
        age: randNumber(game.minAge, game.maxAge),
        victories: randNumber(0, 50),
        defeats: randNumber(0, 50),
        xp: 0,
        level: randNumber(1, 500),
        xp_total: randNumber(0, 10000),
        stamina: 100,
        category: "amateur"
      }

      Accounts.setPassword(userId, "12345678")
      Meteor.users.update({_id: userId}, { $set: { profile: profile } })
    }
  }
})
