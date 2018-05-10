import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Toggle extends Component {
	constructor(...args) {
		super(...args)
		this.state = {
			selectedOption: this.props.selectedOption
		}
	}

	render() {
	    const {
	    	name,
	      options,
	      color
	    } = this.props

	    return  <div className="toggle">
		    	{ options.map((option, i) => {
				      return <label className="toggle-option">
					      		<input name={name} type="radio" defaultChecked={ this.state.selectedOption === option } />
					      		<span>{option}</span>
					      	</label>
			  		})
			  	}
	  		</div>
	}
}


Toggle.propTypes = {
	name: PropTypes.string,
    color: PropTypes.oneOf(['white', 'black', 'grey']),
    options: PropTypes.array,
    selectedOption: PropTypes.string
}

Toggle.defaultProps = {
	name: 'radios',
    color: 'white',
   	options: ['A', 'B'],
   	selectedOption: 'A'
}