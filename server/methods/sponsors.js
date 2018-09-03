import { sponsors } from "../../imports/settings"

Meteor.methods({
  "contract.sign": (contract) => {
    check(contract, String)

    let selectedContract = null 
    sponsors.forEach((item) => {
      if(item.name == contract){
        selectedContract = item
      }
    })

    if(selectedContract == null)
      return false

    if(selectedContract.minLevel > Meteor.user().profile.level)
      return false
    
    let savedSponsors = []
    const { profile } = Meteor.user()
    if(profile.sponsors)
      savedSponsors = profile.sponsors;

    savedSponsors.push(selectedContract)
    profile.sponsors = savedSponsors

    Meteor.users.update(Meteor.userId(), {
      $set: {
        profile
      }
    })

    return true
  }
})
