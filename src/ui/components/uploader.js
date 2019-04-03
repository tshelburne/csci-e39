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
		return (
			<div class="uploader-container">
					<label tabindex="0" for="uploader" class="uploader">Upload Images</label>
					<input {...inputProps} multiple type="file" id="uploader" onChange={this.handleFiles} />
			</div>
		)
	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
