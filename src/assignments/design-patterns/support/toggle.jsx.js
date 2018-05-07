import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Toggle extends Component {

	static defaultProps = {
	    model: {
	      id: 0
	    },
	    color: 'white'
	}


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