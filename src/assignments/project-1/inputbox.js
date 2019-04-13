import React from 'react';

export default class Inputbox extends React.Component {

  render() {
    return (
      <input type="text" className="input-box" placeholder="Description" onChange={(e) => this.props.onChangeHandler(e)} />
    );
  }
}