import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Uploader extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	handleFiles({target: {files}}) {

		var name = document.getElementById("image-name").value;
		var description = document.getElementById("image-description").value;

		for (const file of files) {
			this.props.upload(file, name, description)
		}
	}


	render() {
		const {upload, label, ...inputProps} = this.props
		return(<div>
			<p> Enter name and description, then select file to upload. Limit 150kb.</p>
			<div className="formgrid">
			<label for="image-name"> Name:			</label>
				<input type="text" name="image-name" id="image-name"/>

			<label for="image-description"> Description:			</label>
				<input type="text" name="image-description" id="image-description" />

				<span></span>
			<label class="uploader-btn">
				<input class="uploader-btn" {...inputProps} multiple type="file" onChange={this.handleFiles}/>
				<span> {label} </span>
			</label>
			</div>
		</div>)
	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
