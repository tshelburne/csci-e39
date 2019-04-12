import React from 'react'

const Polaroid = ({image, style, order, caption, onClick}) => {

	return <figure className= {style +" " + order} >
	<img src={image.src} className="gallery__img" alt={image.alt} />
	<figcaption className="polaroid-caption">{caption}</figcaption>
	</figure>
}

export default Polaroid