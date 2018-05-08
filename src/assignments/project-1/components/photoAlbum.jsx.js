import React from 'react'
import PropTypes from 'prop-types'
import Photo from './photo.jsx'


class PhotoAlbum extends React.Component {
    constructor() {
        super(...arguments);
        autobind(this);
    }

    render() {
        return <ul className="photoList">
            {this.props.ads.map(({ id, copy, imageUrl, imageAltText }) =>
                    <Photo key={id} copy={copy} imageUrl={imageUrl} imageAltText={imageAltText} />
                )
            }
        </ul >

    }
}

export default PhotoAlbum