import React from 'react';
import ImageCard from './imagecard.js'

const ImageGallery = ({ images }) => {
  return (  <div className="imagegallery-container">
              {images.map(file =>
                 <ImageCard file={file}/>
                )
              }
            </div>
          )
}

export default ImageGallery;
