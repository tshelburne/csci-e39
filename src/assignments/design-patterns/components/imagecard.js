import React from "react";
import "./imagecard.scss";

const ImageCard = ( { file, onImageSelect} ) => {
  const {id, name, url, error} = file;
  console.log(file);
  console.log("From ImageCard");
  return (
      <li key={id} className="img-key" onClick={ () => onImageSelect(file) } >
      <label className="img-name">{name} </label>
      {!error && <img src={url} style={{maxWidth: `200px`}} />}
      {!!error && <p className="failure">{error}</p>}
      </li>

  )
}

export default ImageCard;
