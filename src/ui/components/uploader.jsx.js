import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';

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
		return (
			<div>
				<label tabindex="0" for="uploader" className="uploader">
					Upload Files
				</label>
				<input className="uploader-input" multiple type="file" onChange={this.handleFiles} />;
			</div>
		);
	}
}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
};

export default Uploader;
