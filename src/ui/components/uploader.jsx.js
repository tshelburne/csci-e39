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

		return (
		<div className="example-container file-input-container">
			<h2 className="header">Upload Images</h2>
			<form className="file-form">
				<label tabIndex="0" htmlFor="uploader" className="uploader" onChange={this.handleFiles} >UPLOAD</label>
				<input id="uploader" multiple type="file" onChange={this.handleFiles} className="uploader-input"/>
			</form> 
		</div>
	);	
			

		const {upload, ...inputProps} = this.props
		return <input {...inputProps} multiple type="file" onChange={this.handleFiles} />

	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
