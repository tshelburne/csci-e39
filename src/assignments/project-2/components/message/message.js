import React, { Component } from 'react'
export default class Message extends Component {

  constructor(props) {
    super(props);   
  }

  render() {
    return (
      <label>{this.props.name} at {this.props.createdAt}</label>
    );
  }
}
