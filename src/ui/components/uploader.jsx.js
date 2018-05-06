import React from "react";
import PropTypes from "prop-types";
import autobind from "class-autobind";

class Uploader extends React.Component {
	constructor() {
		super(...arguments);
		autobind(this);
	}

	handleFiles({ target: { files } }) {
		for (const file of files) {
			this.props.upload(file);
		}
	}

	render() {
		const { upload, ...inputProps } = this.props;
		return (
			<div className="uploader-component">
				<label tabIndex="0" htmlFor="uploader" className="uploader">
					Upload Files
				</label>
				<input
					alt="Upload photos for your album"
					{...inputProps}
					id="uploader"
					multiple
					type="file"
					onChange={this.handleFiles}
					className="uploader-input"
				/>
			</div>
		);
	}
}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired
};

export default Uploader;
