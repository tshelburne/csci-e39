import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Label from '../../assignments/project-1/components/label.jsx'

class Uploader extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {
			name: '',
			description:''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	// https://reactjs.org/docs/forms.html
	handleInputChange(evt) {
		const target = evt.target;
		const inputName = target.name;
		const inputValue = target.value;
		this.setState({
			[inputName]: inputValue
		  });
	}

	handleFiles({target: {files}}) {
		for (const file of files) {
			this.props.upload(file, this.state)
		}
	}

	render() {
		const {upload, ...inputProps} = this.props
		return (
		<form className="uploadForm">
			<Label forInput="#imageName" text="Name" />
			<input id="imageName" name="name" type="text" required maxLength="25" value={this.state.name} onChange={this.handleInputChange}/>
			
			<Label forInput="#imageDescription" text="Description" />
			<input id="imageDescription" name="description" type="text" required maxLength="140" value={this.state.description} onChange={this.handleInputChange}/>
			
			<label tabIndex="0" htmlFor="uploader" className="uploader">
				Upload Image
			</label>
			<input {...inputProps} id="uploader" type="file" onChange={this.handleFiles} />
		</form>
		)
	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
