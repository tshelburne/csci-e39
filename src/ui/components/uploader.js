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
		const {upload, ...inputProps} = this.props
		return <>
        <label tabindex="0" class="uploader">Upload
          <input  {...inputProps} multiple type="file" onChange={this.handleFiles} accept="image/*"/>
        </label>
      </>
      
	}

}

Uploader.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Uploader
