import React from 'react';
import ImageCard from './imagecard.js'

const ImageGallery = ({ images, onImageSelect }) => {
  return (  <div className="imagegallery-container">
              {images.map(file =>
                 <ImageCard file={file} onImageSelect={onImageSelect} />
                )
              }
            </div>
          )
}

export default ImageGallery;
