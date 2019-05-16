import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';

class Profile extends React.Component {
  constructor() {
    super(...arguments);
    autobind(this);
  }
  render() {
    const className = this.props.className;
    const traits = this.props.user.traits;
    console.log(traits);
    console.log(this.props.className);
    return (
      <React.Fragment>
        <div class={className}>{this.props.user.name.firstName} is:</div>
        <ul class={className}>
          {traits.map((trait, idx) => (
            <li key={trait}>
              {idx === traits.length - 1 ? 'and ' : ''}
              {trait +
                (idx === traits.length - 1
                  ? '.'
                  : idx === traits.length - 2
                  ? ''
                  : ',')}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Profile;
