import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Light extends Component {
	constructor(...args) {
		super(...args)
		this.state = {
			active: this.props.active
		}
	}

	componentWillReceiveProps(props) {
		console.log(props.active)
		this.setState({active: props.active})
	}

	render() {
	    const {
	    	name,
	      	color
	    } = this.props

	    return <div className="light">
	    	<div className={"light-bulb " + (this.state.active ? 'active' : 'not-active')} ></div>
	    	<span>{ name }</span>
	    </div>
	}
}

Light.propTypes = {
	name: PropTypes.string,
    color: PropTypes.oneOf(['red', 'green']),
    active: PropTypes.bool
}

Light.defaultProps = {
	name: 'radios',
    color: 'red',
    active: false
}