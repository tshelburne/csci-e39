import React from 'react'
import PropTypes from 'prop-types'

import Image from './image.jsx'

const Gallery = ({images, colNo}) => {
  return (
  	<ul className={`gallery grid-col-${colNo}`}>
	    {images.map((file, index) => 
	      <Image key={index} file={file} />
	    )}
	</ul>  
  )
}

export default Gallery