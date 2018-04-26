import React from 'react'
import PropTypes from 'prop-types'

const PhotoAlbum = ({images, onPhotoClick}) => (
  <ul className="photo-grid">
    {images.map((file, index) => {
      const {id, name, url, error} = file
      return <li 
        key={id}
        onClick={() => onPhotoClick(index)}
        >
        {!error && <img src={url} />}
        {!!error && <p className="failure">{error}</p>}
        <label>{name}</label>
      </li>
    })}
  </ul>
)

PhotoAlbum.propTypes = {
  images: PropTypes.array.isRequired,
  onPhotoClick: PropTypes.func.isRequired,
}

export default PhotoAlbum