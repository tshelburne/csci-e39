import React from 'react'
import PropTypes from 'prop-types'

const Image = ({openThisSite, file}) => {
  const {id, name, url, error} = file

  return (
	  	<li className="image" onClick={openThisSite}>
		  	<label>{name}</label>
		    {!error && <img src={url} />}
		    {!!error && <p className="failure">{error}</p>}
	  	</li>
  )
}

export default Image