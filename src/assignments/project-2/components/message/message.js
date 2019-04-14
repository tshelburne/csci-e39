import React, { Component } from 'react'
import moment from 'moment';
export default class Message extends Component {

  constructor(props) {
    super(props);   
  }

  render() {
    return (
      <span class="message">
        <label>{this.props.name} at {moment(this.props.createdAt).fromNow()}</label>
        <p>{this.props.text.replace(/\S+/g, "Hodor")}</p>
      </span>
    );
  }
}
