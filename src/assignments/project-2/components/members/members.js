import React, { Component } from 'react'
import List from '../list/list'

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
            <span>{name}</span>
          )}
        </List>
      </article>
    );
  }
}
