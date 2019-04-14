import React, { Component } from 'react'
import './message.scss'
export default class Message extends Component {

  constructor(props) {
    super(props);   
  }

  render() {
    return (
      <span class="message">
        <label>{this.props.name} at {this.props.createdAt}</label>
        <p>{this.props.text.replace(/\S+/g, "Hodor")}</p>
      </span>
    );
  }
}
