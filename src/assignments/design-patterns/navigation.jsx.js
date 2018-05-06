import React from 'react'

const Navigation = ({text, styleClass, href}) =>
	<a className = {'${styleClass}'}  href = "{href}">{text}/a>

export const linkOne = ({text, href}) =>
	<a href = "{href}" styleClass = "link1">{text}</a>

