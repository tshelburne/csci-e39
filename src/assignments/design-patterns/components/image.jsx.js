import React from 'react'

const Image = ({url,alt}) =>
  <figure className='spot-grad'>
    <img style={{width: "100%"}} src={url} alt={alt} />
    <div className='adjust'></div>
  </figure>

export default Image
