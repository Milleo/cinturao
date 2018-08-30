import React, { Component } from "react"
import { Button, Card } from "semantic-ui-react"
import { Link } from "react-router-dom"
import T from "../components/translation"

class Dashboard extends Component{
  constructor(props){
    super(props)

    this.cardItems = [
      {
        header: "dashboard.cards.training.title",
        content: "dashboard.cards.training.description",
        color: "blue",
        icon: "refresh",
        link: { url: "/training", label: "dashboard.cards.training.label" }
      },
      {
        header: "dashboard.cards.sponsors.title",
        content: "dashboard.cards.sponsors.description",
        color: "green",
        icon: "tag",
        link: { url: "/sponsors", label: "dashboard.cards.sponsors.label" }
      },
      {
        header: "dashboard.cards.fight.title",
        content: "dashboard.cards.fight.description",
        color: "red",
        icon: "trophy",
        link: { url: "/fight", label: "dashboard.cards.fight.label" }
      }
    ]
  }

  training = (e) => {
    e.preventDefault()
    Meteor.call("player.training")
  }

  renderCards(){
    return <Card.Group itemsPerRow={3} textAlign="center">
      {this.cardItems.map((item) => {
        return <Card color={item.color} key={item.header}>
          <Card.Content textAlign="center">
            <Card.Header><T>{item.header}</T></Card.Header>
            <Card.Description><T>{item.content}</T></Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              color={item.color}
              as={Link}
              fluid
              to={item.link.url}
              labelPosition="left"
              icon={item.icon}
              content={i18n.__(item.link.label)} />
          </Card.Content>
        </Card>
      })}
    </Card.Group>
  }

  render(){
    return <div>
      <h1><T>dashboard.title</T></h1>
      <p><T>dashboard.text</T></p>
      { this.renderCards() }
    </div>
  }
}

export default Dashboard
