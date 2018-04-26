import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
		const {upload, ...inputProps} = this.props
		return <input className="uploader-input" {...inputProps} multiple type="file" onChange={this.handleFiles} />
	}
}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
};

export default Uploader;
