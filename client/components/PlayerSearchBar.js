import React, { Component } from "react"
import { Dropdown } from "semantic-ui-react"

class PlayerSearchBar extends Component{
  constructor(props){
    super(props)

    this.state = {
      fetching: false,
      searchResults: []
    }
  }

  handlePlayerSearch = (e, {searchQuery}) => {
    const query = searchQuery.trim()

    this.setState({
      fetching: true,
      searchResults: []
    })
    Meteor.call("player.search", query, (err, res) => {
      const searchResults = res.map((item) => {
        return {
          value: item._id,
          label: { content: "lvl " + item.profile.level, color: "blue", circular: true },
          text: item.username
        }
      })
      this.setState({
        fetching: false,
        searchResults
      })
    })
  }

  render(){
    return <Dropdown
      fluid
      search
      selection
      options={this.state.searchResults}
      loading={this.state.fetching}
      deburr
      onSearchChange={this.handlePlayerSearch}
      minCharacters={3}
      placeholder="Search for other players"
    />
  }
}

export default PlayerSearchBar
