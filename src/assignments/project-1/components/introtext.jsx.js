import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Intro extends React.Component {
  
  constructor() {
		super(...arguments)
		autobind(this)
	}
  
  render() {
    const {text, ...inputProps} = this.props
    return <p>{text}</p>
  }
  
}

export default Intro