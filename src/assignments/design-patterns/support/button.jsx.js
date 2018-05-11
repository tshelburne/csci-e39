import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
	constructor(...args) {
		super(...args)
	}

	render() {
	    const {
	      action,
	      color,
	      label
	    } = this.props
	    return ( 
	      <button 
	      	className={this.props.color + " tr-button"}
	        onClick={this.props.action}>
	        { label }
	      </button>
	    )
	}
}

Button.propTypes = {
    color: PropTypes.oneOf(['white', 'yellow', 'orange', 'red']),
    action: PropTypes.func,
    label: PropTypes.string
}

Button.defaultProps = {
    color: 'white',
    label: 'Cancel'
}