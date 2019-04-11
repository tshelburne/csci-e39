import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Updater extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	onSubmit(event) {
		{/* Using the updateFile method... temporarily hardcoding description as 'no idea' */}
			this.props.updateFile(this.props.file, this.props.file.name, "no idea")
	}

	render() {
		const {updateFile, file, ...inputProps} = this.props
		return <form onSubmit={this.onSubmit}>
			{/* Still need to work on separately stlying text field and submit button */}
			<label className="update_label">Image Description</label>
			<input className="update_text" type="text" onChange={this.handleChange} />
			<input className="update_submit" type="submit" value="Submit"/>
			</form>
	}

}

Updater.propTypes = {
	updateFile: PropTypes.func.isRequired,
}

export default Updater