import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';

class Adios extends React.Component {
  constructor() {
    super(...arguments);
    autobind(this);
  }
  render() {
    const { ...props } = this.props;
    return (
      <React.Fragment>
        <div className={props.className}>
          Thank you for visiting {props.first} {props.last}'s photos
        </div>
      </React.Fragment>
    );
  }
}

export default Adios;
