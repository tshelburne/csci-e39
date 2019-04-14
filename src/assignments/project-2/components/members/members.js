import React, { Component } from 'react'
import List from '../list/list'
import Member from '../member/member'
import './members.scss'

export default class Members extends Component {

  constructor(props) {
    super(props);   
  }

  render() {
    return (
      <article className='members'>
        <h2>Members</h2>
        <List>
          {this.props.classroom.students.map(({name}) =>
            <Member name={name}/>
          )}
        </List>
      </article>
    );
  }
}
