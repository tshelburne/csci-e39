import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Toggle extends Component {
	render() {
	    const {
	      model,
	      color
	    } = this.props
	    return ( 
	      <div className="toggle">
	      	<div className="toggle-option">
	      		<input type="radio" />
	      	</div>
	      </div>
	    )
	}
}

Toggle.propTypes = {
    color: string,
    options: PropTypes.object
}

Toggle.defaultProps = {
    color: 'white',
    amount: 2
}