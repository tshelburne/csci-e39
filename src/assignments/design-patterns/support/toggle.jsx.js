import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Toggle extends Component {
	constructor(...args) {
		super(...args)
		this.state = {
			selectedOption: this.props.selectedOption
		}

		this.updateSelected = this.updateSelected.bind(this);
	}

	updateSelected(option) {
		this.setState({selectedOption: option})

		this.props.getOption(option);
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
					      		<input name={name} type="radio" onClick={() => this.updateSelected(option) } defaultChecked={ this.state.selectedOption === option } />
					      		<span className={ this.props.color }>{option}</span>
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
    selectedOption: PropTypes.string,
    getOption: PropTypes.func
}

Toggle.defaultProps = {
	name: 'radios',
    color: 'white',
   	options: ['A', 'B'],
   	selectedOption: 'A'
}