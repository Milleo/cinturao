import React, { Component } from "react"
import { Dropdown, Flag,  Segment } from "semantic-ui-react"

class LanguageSelector extends Component {
  constructor(props){
    super(props)
    
    this.languages = []
    const codes = i18n.getLanguages()
    const names = i18n.getLanguages("nativeName")
    this.flagDict = {
      "en": "gb",
      "pt-BR": "br"
    };

    for(i = 0; i < codes.length; i++){
      const obj = { value: codes[i], text: <span><Flag name={this.flagDict[codes[i]]} /></span>, key: codes[i] }
      this.languages.push(obj)
    }
  }

  render(){
    return <Segment basic floated="right" textAlign="right">
      <Dropdown
        selection
        options={this.languages}
        compact
        defaultValue={ i18n.getLocale() }
        onChange={ (e, value) => this.props.onChangeCallback(value) } />
    </Segment>
  }
}

export default LanguageSelector
