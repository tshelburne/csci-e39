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
    return(
      <label htmlFor="uploader" className="uploader button">Upload Files
        <input type="file" id="uploader" className="uploader-input" multiple onChange={this.handleFiles} />
      </label>
    )
	}
}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
