import React, { Component } from "react"
import { Message } from "semantic-ui-react"

class Messages extends Component{
  
  printMessages(){
    if(Array.isArray(this.props.messages.content)){
      return this.props.messages.content.map((item, i) => {
        return <p key={i}>{item}</p>
      })
    }else{
      return <p>{this.props.messages.content}</p>
    }
  }  

  render(){
    return <Message
      positive={ this.props.messages.type == "success" }
      negative={ this.props.messages.type == "error" }>
      { this.printMessages() }
    </Message>
  }
}

export default Messages;
