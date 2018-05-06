import React from 'react'

const Image = ({src, styleClass, alt}) =>
	<img className = {`image ${styleClass}`} src = {src} alt = {alt}></img>

export const ThumbNail = ({src, alt}) =>
	<Image src = {src} alt = {alt} styleClass = "small" />

export const GalleryImage = ({src, alt}) =>
	<Image src = {src} alt = {alt} styleClass = "gallery" />




