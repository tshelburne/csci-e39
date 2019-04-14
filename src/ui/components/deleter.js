import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Deleter extends React.Component {

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
		return <input {...inputProps} multiple type="file" onChange={this.handleFiles} />
			   
	}

}

Deleter.propTypes = {
	upload: PropTypes.func.isRequired,
}

export default Deleter
