import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  
  render() {
    const {type, children, onClick, ...inputProps} = this.props

     return(
        <button className={`button ${type}`} onClick={onClick}>{children}</button>
      )
  }
}

export default Button