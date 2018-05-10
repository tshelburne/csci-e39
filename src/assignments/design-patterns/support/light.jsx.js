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

	    return <div className="light">
	    	<div className="light-bulb"></div>
	    	{ name }
	    </div>
	}
}

Light.propTypes = {
	name: PropTypes.string,
    color: PropTypes.oneOf(['red', 'black', 'grey']),
}

Light.defaultProps = {
	name: 'radios',
    color: 'white',
}