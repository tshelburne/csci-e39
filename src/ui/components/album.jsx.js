import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Album extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {

       var filesList = this.props.uploadedFiles.map(file => {
            const {id, name, url, error} = file

            return <li key={id}>
                <label>{name}</label>
                {!error && <img src={url} style={{maxWidth: `200px`}} />}
                {!!error && <p className="failure">{error}</p>}
            </li>
        });

		return <ul>{filesList}</ul>
	}

}

Album.propTypes = {
	uploadedFiles: PropTypes.func.isRequired,
}

export default Album
