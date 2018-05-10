import React from 'react'
import PropTypes from 'prop-types'

const PhotoCard = ({image}) => {
    const { name, url, description } = image

    return (
        <div className="photo-card">
            <img className="photo" src={url} alt={name} title={name} />
            <p>{description}</p>
        </div>
    )
}

export default PhotoCard