import React from 'react'

// const ImageCard = ({ video, onVideoSelect }) => {
const ImageCard = ( {files} ) => {
  const {id, name, url, error} = files;
  console.log(files);
  return <li key={id} className="img-key">
          <label className="img-name">{name}</label>
          {!error && <img src={url} style={{maxWidth: `200px`}} />}
          {!!error && <p className="failure">{error}</p>}
        </li>

};

// return <div className="one-image"> One Image </div>

export default ImageCard;
