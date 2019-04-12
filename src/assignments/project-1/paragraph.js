import React from 'react'

const Writeup = ({name, className, content}) => {
	return <b className={className}>
	<h2>{name}</h2>
	<p> {content} </p>
	</b>
};

export default Writeup