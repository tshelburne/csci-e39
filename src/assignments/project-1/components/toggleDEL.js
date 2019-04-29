import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';
import Profile from './profile';

class Toggle extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      isVisible: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isVisible: !this.state.isVisible
    });
    //console.log(this.state.isVisible);
  }

  render() {
    // const props = this.props;
    const show = 'Guest: Learn about ';
    return (
      <React.Fragment>
        <label className='button' onClick={this.handleClick}>
          {this.state.isVisible ? 'hide' : show}
        </label>
        {this.state.isVisible && <Profile />}
      </React.Fragment>
    );
  }
}

export default Toggle;
