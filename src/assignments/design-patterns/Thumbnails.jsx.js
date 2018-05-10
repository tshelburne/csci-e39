import React from 'react'
import PropTypes from 'prop-types'
import List from './List.jsx'
import PhotoCard from './PhotoCard.jsx'

const Thumbnails = ({images}) => {

    return (
        <List>
        {images.map((image, index) =>
            <PhotoCard
                key={image.id}
                image={image}
                description={image.description}
            />
        )}
        </List>
    )
}

export default Thumbnails
