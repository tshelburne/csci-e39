import React from 'react'

const Img = ({link, alt}) =>
	<img src={link} alt={alt} />

export const Image = ({link, alt}) =>
	<Img link={link} alt={alt}></Img>

Image.displayName = 'Image'
