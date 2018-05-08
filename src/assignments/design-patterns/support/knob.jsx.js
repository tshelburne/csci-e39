import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Knob extends Component {

	render() {
	    const {
	      model,
	      color
	    } = this.props
	    return ( 
	      <Button
	        onClick={this.handleClick}>
	      </Button>
	    )
	}
}

Knob.propTypes = {
    color: string
}

Knob.defaultProps = {
	color: 'white'
}