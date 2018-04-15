import React from 'react'
import PropTypes from 'prop-types'

class PhotoAlbum extends React.Component {
  render() {
    return <ul className="photo-grid">
      {this.props.completedFiles.map((file, index) => {
        const {id, name, url, error} = file
        return <li 
          key={id}
          onClick={() => this.props.onPhotoClick(index)}
          >
          {!error && <img src={url} />}
          {!!error && <p className="failure">{error}</p>}
          <label>{name}</label>
        </li>
      })}
    </ul>
	}
}

PhotoAlbum.propTypes = {
	completedFiles: PropTypes.array.isRequired,
}

export default PhotoAlbum