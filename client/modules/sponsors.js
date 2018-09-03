import React, { Component } from "react"
import { Button, Card } from "semantic-ui-react"
import T from "../components/Translation"
import { sponsors } from "/imports/settings"
import { withTracker } from "meteor/react-meteor-data"

class Sponsors extends Component{
  handleContractSign = (contract) => {
    Meteor.call("contract.sign", contract)
  }

  renderSponsors(){
    const { profile } = this.props.user

    return <Card.Group itemsPerRow={3}>
      {sponsors.map((item) => {
        let ableToSign = false
        const sponsorName = i18n.__("sponsors.list." + item.name)
        if(profile.level > item.minLevel)
          ableToSign = true

        let hasSigned = false
        if(profile.sponsors){
          profile.sponsors.forEach((sponsor) => {
            if(sponsor.name == item.name){
              hasSigned = true
              return
            }
          })
        }

        return <Card>
          <Card.Content>
            <Card.Header>{sponsorName}</Card.Header>
            <Card.Meta><T>sponsors.card.minLevel</T>: {item.minLevel}</Card.Meta>
            <Card.Meta><T>sponsors.card.payment</T>: ${item.monthPayment}</Card.Meta>
          </Card.Content>
          { !hasSigned && <Card.Content extra>
            <Button
              positive
              fluid
              disabled={!ableToSign}
              content={i18n.__("sponsors.card.sign")}
              onClick={() => this.handleContractSign(item.name)} />
          </Card.Content> }
        </Card>
      })}
    </Card.Group>
  }
  render(){
    return <div>
      <h1><T>sponsors.title</T></h1>
      <p><T>sponsors.description</T></p>
      { this.renderSponsors() }
    </div>
  }
}

export default withTracker( (props) => {
  const user = Meteor.user()

  return { user }
})(Sponsors)
