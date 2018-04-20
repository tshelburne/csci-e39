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
		return <div className="uploader-button-container">
		<input {...inputProps} multiple type="file" id="uploader" className="uploader-input" onChange={this.handleFiles} />
		<label className="uploader" tabIndex="0" htmlFor="uploader">Upload Images</label>
		</div>
	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
