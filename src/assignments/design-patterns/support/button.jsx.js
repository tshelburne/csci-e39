import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
	constructor(...args) {
		super(...args)
		this.state = {
			active: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {

		console.log(this.state);
		this.setState(prevState => ({
		  active: !prevState.active
		}))
	}

	render() {
	    const {
	      model,
	      color
	    } = this.props
	    return ( 
	      <button 
	      	className={this.props.color + " tr-button " + (this.state.active ? 'active' : 'not-active')}
	        onClick={this.handleClick}>
	      </button>
	    )
	}
}

Button.propTypes = {
    color: PropTypes.oneOf(['white', 'yellow', 'orange', 'red']),
}

Button.defaultProps = {
    color: 'white'
}

Button.handleClick = (e) => {
    e.preventDefault()
}