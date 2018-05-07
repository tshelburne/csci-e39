import React, { Component } from 'react'
import { string, object } from 'prop-types'

export default class Button extends Component {

	static propTypes = {
	    model: object.isRequired,
	    title: string
	}

	static defaultProps = {
	    model: {
	      id: 0
	    },
	    color: 'white'
	}

	handleClick = (e) => {
	    e.preventDefault()
	}

	render() {
	    const {
	      model,
	      color
	    } = this.props
	    return ( 
	      <button 
	        onClick={this.handleClick}>
	      </button>
	    )
	}
}