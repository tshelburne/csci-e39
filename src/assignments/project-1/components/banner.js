import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';

class Banner extends React.Component {
  constructor() {
    super(...arguments);
    autobind(this);
  }
  render() {
    const userName = this.props.user.name;
    return (
      <React.Fragment>
        <h1 className='banner'>
          Photos from {userName.firstName} {userName.lastName}
        </h1>
        <div className='uname'>(Username: {userName.userName}) </div>
      </React.Fragment>
    );
  }
}

export default Banner;
