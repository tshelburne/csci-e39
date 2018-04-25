import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class TextArea extends React.Component {
  
  constructor() {
		super(...arguments)
		autobind(this)
		
		//textarea update code sourced from https://reactjs.org/docs/forms.html
		this.state = {
      value: this.props.value
    };
	}

  
  render() {
    const {value, buttonText, handleChange, ...inputProps} = this.props
    return <form id="update-alt">
    <input type="textarea" value={this.state.value} onChange={this.props.handleChange}/>
    <button type="submit">{buttonText}</button>
    </form>
  }
  
}

export default TextArea