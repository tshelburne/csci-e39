import React from 'react'
import Modal from 'react-modal';

const ImageCard = ( { file}) => {
  const {id, name, url, error} = file;
  // console.log("from imagecard");
  console.log(file);
  return (
      <li key={id} className="img-key" >
      <label className="img-name">{name}</label>
      {!error && <img src={url} style={{maxWidth: `200px`}} />}
      {!!error && <p className="failure">{error}</p>}
      <button onClick={name}>Trigger Modal</button>
      <Modal
         isOpen={name }
         contentLabel="Minimal Modal Example" ariaHideApp={false}
      >

      </Modal>
      </li>

  )
}

export default ImageCard;
