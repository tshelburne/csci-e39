import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Light extends Component {
	constructor(...args) {
		super(...args)
		this.state = {
			active: false
		}
	}

	render() {
	    const {
	    	name,
	      	color
	    } = this.props

	    return 
	}
}

Light.propTypes = {
	name: PropTypes.string,
    color: PropTypes.oneOf(['white', 'black', 'grey']),
}

Light.defaultProps = {
	name: 'radios',
    color: 'white',
}