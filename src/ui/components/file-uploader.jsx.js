import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class FileUploader extends React.Component {

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
		return <input multiple type="file" onChange={this.handleFiles} />
	}

}

FileUploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default FileUploader
