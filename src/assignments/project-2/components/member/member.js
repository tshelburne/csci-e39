import React from 'react'
import './member.scss'

export default class Member extends React.Component {

  constructor(props) {
    super(props);   
  }

  render() {
    return (
      <span className='member'>
        <img src='https://pbs.twimg.com/media/BqBP5KzCUAA_n0X.png' alt="Avatar"></img>
        <p>{this.props.name}</p>        
      </span>
    );
  }
}
