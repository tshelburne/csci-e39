import React from 'react';
import ImageCard from './imagecard.js'

const ImageGallery = ({ images }) => {
  return <div className="imagegallery-container">
        <ul className="image-ul">
            {images.map(files => {
                  // console.log(files);
                  <ImageCard file={files}></ImageCard>
                  // <ImageCard id={id} name={name} url={url} error={error}></ImageCard>
                  // const {id, name, url, error} = file
                  //
                  // return <li key={id} className="img-key">
                  // <label className="img-name">{name}</label>
                  // {!error && <img src={url} style={{maxWidth: `200px`}} />}
                  // {!!error && <p className="failure">{error}</p>}
                  // </li>

                  // <ImageCard id={id} name={name} url={url} error={error}></ImageCard>
                }
            )
          }
      </ul>
      </div>
}


export default ImageGallery;
