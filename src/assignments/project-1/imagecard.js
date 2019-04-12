import React from 'react'

const ImageCard = ( { file}) => {
  const {id, name, url, error} = file;
  console.log("from imagecard");
  return (
  <div className="image-card">
      <li key={id} className="img-key">
      <label className="img-name">{name}</label>
      {!error && <img src={url} style={{maxWidth: `200px`}} />}
      {!!error && <p className="failure">{error}</p>}
      </li>
  </div>
  )
}

export default ImageCard;
