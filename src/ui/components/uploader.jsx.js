import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

import FlatButton from 'material-ui/FlatButton';

class Uploader extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {currentText: ``}
	}

	handleFiles({target: {files}}) {
		for (const file of files) {
			this.props.upload(file)
		}
	}

	render() {
		const {upload, ...inputProps} = this.props

		const styles = {
		  uploadButton: {
		    verticalAlign: 'middle',
		    color: '#fff',
		    marginTop: '5px'
		  },
		  uploadInput: {
		    cursor: 'pointer',
		    position: 'absolute',
		    top: 0,
		    bottom: 0,
		    right: 0,
		    left: 0,
		    width: '100%',
		    opacity: 0,
		  },
		};

		return <FlatButton
		      label="Choose a foto"
		      labelPosition="before"
		      style={styles.uploadButton}
		      containerElement="label">
		      	<input {...inputProps} type="file" multiple style={styles.uploadInput} onChange={this.handleFiles}/>
		    </FlatButton>
	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
