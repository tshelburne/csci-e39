import React from 'react'

const Photo = ({onClick, file}) => {
  const {id, name, url, error} = file
  return <li
    className="photo" 
    onClick={onClick}
    >
    {!error && <img src={url} />}
    {!!error && <p className="failure">{error}</p>}
    <label>{name}</label>
  </li>
}

export default Photo
