import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import {uuid} from '../../util/functions'
import './uploader.scss'
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
		const id = uuid();
		return (
			<React.Fragment>
			<label for={id} class="uploader">Upload Files</label>
			<input {...inputProps} id={id} multiple type="file" onChange={this.handleFiles} />
			</React.Fragment>
		);
	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
