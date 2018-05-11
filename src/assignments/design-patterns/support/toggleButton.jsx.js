import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import jsxToString from 'jsx-to-string'
import beautify from 'js-beautify'

export default class ToggleButton extends Component {
	constructor(...args) {
		super(...args)
		this.state = {
			active: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
		  active: !prevState.active
		}))
	}

	render() {
	    const {
	      color
	    } = this.props
	    return ( 
	      <button 
	      	className={this.props.color + " tr-toggle-button " + (this.state.active ? 'active' : 'not-active')}
	        onClick={this.handleClick}>
	      </button>
	    )
	}
}

ToggleButton.propTypes = {
    color: PropTypes.oneOf(['white', 'yellow', 'orange', 'red']),
}

ToggleButton.defaultProps = {
    color: 'white'
}