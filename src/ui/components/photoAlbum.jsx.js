import React from 'react'
import PropTypes from 'prop-types'
import Photo from '../../assignments/design-patterns/components/photo.jsx'

const PhotoAlbum = ({images, onPhotoClick}) => (
  <ul className="photo-grid">
    {images.map((file, index) => 
      <Photo 
        key={index}
        onClick={() => onPhotoClick(index)}
        file={file}
      />
    )}
  </ul>
)

PhotoAlbum.propTypes = {
  images: PropTypes.array.isRequired,
  onPhotoClick: PropTypes.func.isRequired,
}

export default PhotoAlbum
