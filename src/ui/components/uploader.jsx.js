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
<<<<<<< HEAD
		return <div className="uploader">
			<input multiple type="file" id="uploader" onChange={this.handleFiles} />
			<label tabindex="0" for="uploader">Upload Files</label>
		</div>
=======
		const {upload, ...inputProps} = this.props
		return <input {...inputProps} multiple type="file" onChange={this.handleFiles} />
>>>>>>> 47dec8deab681f45cc4255ba2bfade06da712a16
	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
