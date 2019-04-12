import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Uploader extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
        // this.state = {
			// currentFile: '',
			// description: ''}
	}

    handleFiles({target: {files}}) {
        for (const file of files) {
            this.props.upload(file)
        }
    }

    // handleFiles({target: {files}}) {
	// 	this.state.currentFile.
	// 	this.props.upload(this.state.currentFile)
    // }
    //
    // setFile = files => {
     //    this.setState({ currentFile: files[0] });
    // };
    //
    // setDescription = description =>{
	// 	this.setState({ description: description })
	// };

	render() {
		const {upload, ...inputProps} = this.props;

		return (
                <input {...inputProps} multiple type="file" id="uploader-input" onChange={this.handleFiles} />

	)

		// return <div>
		// 			<input {...inputProps} multiple type="file" id="uploader-input" onChange = { (e) => this.setFile(e.target) } />
		// 			<textarea name="textarea" cols="30" rows="3" placeholder="Description" onChange={ (e) => this.setDescription(e.target.value) }/>
		// 			<button onClick={this.handleFiles}>Submit</button>
		// 		</div>
        // onChange={this.handleFiles}



	}
}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
