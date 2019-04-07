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
		const {upload, label, ...inputProps} = this.props
		return 		<label class="uploader-btn">	<input class="uploader-btn" {...inputProps} multiple type="file" onChange={this.handleFiles}/> <span> {label} </span>	</label>

	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
