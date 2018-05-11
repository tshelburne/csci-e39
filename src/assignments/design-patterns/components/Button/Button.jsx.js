import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  
  render() {
    const {className, ...inputProps} = this.props

     return(
        <button className={`button ${className}`}>Primary Button</button>
      )
  }
}

export default Button