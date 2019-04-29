import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';
import Profile from './profile';

class ToggleProfile extends React.Component {
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
  }

  render() {
    const className = this.props.className;
    const userName = this.props.user.name;
    const show = 'Guest: Learn something about ' + userName.firstName;
    const hide = 'Guest: Hide ' + userName.firstName + "'s details";

    return (
      <React.Fragment>
        <label className='button' onClick={this.handleClick}>
          {this.state.isVisible ? hide : show}
        </label>
        {this.state.isVisible && (
          <Profile user={this.props.user} className={this.props.className} />
        )}
      </React.Fragment>
    );
  }
}

export default ToggleProfile;
