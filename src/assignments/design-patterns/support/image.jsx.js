import React from 'react'

const Image = ({openThisSite, file}) => {
  const {id, name, url, error} = file

  return (
  	<ul>
	  	<li className="photo" onClick={openThisSite}>
		  	<label>{name}</label>
		    {!error && <img src={url} />}
		    {!!error && <p className="failure">{error}</p>}
	  	</li>
	</ul>
  )
}

export default Image