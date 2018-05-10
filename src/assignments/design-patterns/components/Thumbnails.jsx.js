import React from 'react'
import PropTypes from 'prop-types'
import List from './List.jsx'
import PhotoCard from './PhotoCard.jsx'

const Thumbnails = ({images, useGridView}) => {

    return (
        <div>
            { useGridView=="true" &&
                <List className="list-container">
                {images.map((image, index) =>
                    <PhotoCard
                        key={image.id}
                        image={image}
                    />
                )}
                </List>
            }
            { useGridView=="false" &&
            <div className="grid-container">
                {images.map((image, index) =>
                    <PhotoCard
                        key={image.id}
                        image={image}
                    />
                )}
            </div>                
             }
        </div>

    )
}

export default Thumbnails
