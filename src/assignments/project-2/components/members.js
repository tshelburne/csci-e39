import React from 'react'
import List from './list'

class Members extends React.Component {

  constructor(props) {
    super(props);   
  }

  render() {
    return (
      <>
        <h2>Members</h2>
        <List>
          {this.props.classroom.students.map(({name}) =>
            <span>{name}</span>
          )}
        </List>
      </>
    );
  }
}


//usage will be
//<Members classroom={classroom} />

export default Members