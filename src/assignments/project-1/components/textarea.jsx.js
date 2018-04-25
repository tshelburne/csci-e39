import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class TextArea extends React.Component {
  
  constructor() {
		super(...arguments)
		autobind(this)
	}
  
  render() {
    const {placeholder, buttonText, ...inputProps} = this.props
    return <form id="update-alt">
    <input type="textarea" placeholder={placeholder} rows="10"/>
    <button>{buttonText}</button>
    </form>
  }
  
}

export default TextArea