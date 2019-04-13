import React from 'react'

class Members extends React.Component {

  constructor(props) {
    super(props);   
  }

  render() {
    return (
      <>
        <h2>Members</h2>
        <ul>
          {this.props.classroom.students.map(({id, name}) =>
            <li key={id}><span>{name}</span></li>
          )}
        </ul>
      </>
    );
  }
}


//usage will be
//<Members classroom={classroom} />

export default Members