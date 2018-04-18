import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Button extends React.Component {
    render() {
      return <button>{this.props.name}</button>;
    }
  }
export default Button
