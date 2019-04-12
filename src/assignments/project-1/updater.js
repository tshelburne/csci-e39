import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Updater extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {value: ''};
	}

	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

	onSubmit(event) {
		{/* Using the updateFile method to update description */}
		this.props.updateFile(this.props.file, {
        	name: this.props.file.name,
        	description: this.state.value})
	}

	render() {
		const {updateFile, file, formvalue, ...inputProps} = this.props
		return <form onSubmit={this.onSubmit}>
			{/* Still need to work on separately stlying text field and submit button */}
			<label className="update_label">Image Description</label>
			<input className="update_text" type="text" placeholder={formvalue} onChange={this.handleChange} />
			<input className="update_submit" type="submit" value="Submit"/>
			</form>
	}

}

Updater.propTypes = {
	updateFile: PropTypes.func.isRequired,
}

export default Updater