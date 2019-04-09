import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Uploader from "./uploader";



class Album extends React.Component {

    constructor() {
        super(...arguments)
        autobind(this)
    }

    render() {
        const {imgData, albumName, ...inputProps} = this.props
            return (
                <ul className="image-grid">
                    {imgData.map(file => {
                        const {id, name, url, error} = file

                        return <li key={id} className="image-card">
                            {!error && <img src={url} style={{maxWidth: `200px`}}/>}
                            {!!error && <p className="failure">{error}</p>}
                            <label>{name}</label>

                        </li>
                    })}
                </ul>)

    }
}

// Not really sure what this is, but it seems to require props?
Uploader.propTypes = {
    upload: PropTypes.func.isRequired,
}


export default Album
