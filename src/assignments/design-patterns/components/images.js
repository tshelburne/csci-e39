import React from 'react'
import PropTypes from 'prop-types'

const Img = ({children, title, src }) => {
	return <div className="image">
		<img src={src}  alt={title} />
		{children}
	</div>
}

Img.propTypes = {
	title: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
}

export default Img

export const ImgFigure = ({children, title, src, description }) => {
	return <figure className="figure--image">
		<img src={src}  alt={description ? description : title}/>
		{description && <figcaption className="image--caption">{description}</figcaption>}
		{children}
	</figure>
}

export const ImgPicture = ({children, title, src,src1,src2, description }) => {
	return <picture>
	  <source media="(min-width: 650px)" srcset="src1" />
	  <source media="(min-width: 465px)" srcset="src2" />
	  <img src="src" alt="Flowers" style="width:auto;" />
	</picture>
}
