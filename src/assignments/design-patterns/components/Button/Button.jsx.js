import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  
  render() {
    const {type, children, ...inputProps} = this.props

     return(
        <button className={`button ${type}`}>{children}</button>
      )
  }
}

export default Button