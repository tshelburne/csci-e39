import React from 'react'
import PropTypes from 'prop-types'
import Photo from './photo.jsx'

const PhotoAlbum = ({images, onPhotoClick, gridColumns}) => {
  return <ul className={`photo-grid grid-columns-${gridColumns}`}>
    {images.map((file, index) => 
      <Photo 
        key={index}
        onClick={() => onPhotoClick(index)}
        file={file}
      />
    )}
  </ul>
}

export default PhotoAlbum
