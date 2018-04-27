import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Uploader extends React.Component {

	constructor() {
		super(...arguments);
		autobind(this);
	}

	handleFiles({target: {files}}) {
		for (const file of files) {
			this.props.upload(file)
		}
	}

	render() {
		const {upload, ...inputProps} = this.props;

		return <div className="upload-btn-wrapper">
					<button className="btn">Upload a file</button>
					<input {...inputProps} multiple type="file" onChange={this.handleFiles} />
			   </div>
	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
};

export default Uploader
