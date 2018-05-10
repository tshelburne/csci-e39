import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Photo extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {fileId, url, name, error, ...inputProps} = this.props
		return <article {...inputProps}>
      {!error && <img {...inputProps} name={fileId} src={url} />}
      {!!error && <p {...inputProps} className="failure">{error}</p>}
			<label {...inputProps} htmlFor={fileId}>{name}</label>
    </article>
	}

}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}


export default Photo
