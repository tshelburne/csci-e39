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

            return <li className="list-item" key={id}>
                {!error && <img className="photo" title={name} alt={name} src={url} />}
                {!!error && <p className="failure">{error}</p>}
            </li>;
        });

		return <ul className="custom-grid">{filesList}</ul>
	}

}

Album.propTypes = {
	uploadedFiles: PropTypes.array.isRequired,
}

export default Album
