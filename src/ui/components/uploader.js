import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Uploader extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	handleFiles({target: {files}}) {
		for (const file of files) {
			this.props.upload(file)
		}
	}

	render() {
		const {upload, ...inputProps} = this.props
		return <React.Fragment>
			<label for="uploader" className="uploader">Upload Images</label>
			<input id="uploader" className="uploader-input" {...inputProps} multiple type="file" onChange={this.handleFiles} />
		</React.Fragment>
	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
