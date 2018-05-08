import React, { Component } from 'react'
import { string, object } from 'prop-types'

export default class Button extends Component {

	render() {
	    const {
	      model,
	      color
	    } = this.props
	    return ( 
	      <button 
	        onClick={this.handleClick}>
	        Test
	      </button>
	    )
	}
}

Button.propTypes = {
    color: string
}

Button.defaultProps = {
    color: 'white'
}

Button.handleClick = (e) => {
    e.preventDefault()
}