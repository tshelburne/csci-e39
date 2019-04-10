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
			console.log("name_value" +name +" -->>"+ description );
			this.props.upload(file, name, description)
		}
	}
	handleSubmit(e)  {
		e.preventDefault();
		console.log('submitting form. We need to validate it!');
	}


	render() {
		const {upload, label, ...inputProps} = this.props
		return(<div class="form">
			<p> Enter name and description, then select file to upload. Limit 150kb.</p>
			<label> Name:
				<input type="text" name="image-name" id="image-name"/>
			</label>
			<br/>
			<label> Description:
			<input type="text" name="image-description" id="image-description" />
			</label>
			<br/>
			<label class="uploader-btn">
				<input class="uploader-btn" {...inputProps} multiple type="file" onChange={this.handleFiles}/> <span> {label} </span>	</label>


		</div>)
	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
