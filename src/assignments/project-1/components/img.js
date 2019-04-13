import React from 'react'

const Img = ({ className, small, large, alt, style }) => (
	<picture className={className}>
		<source media="(max-width: 767px)" srcSet={small} />
		<source media="(min-width: 768px)" srcSet={large} />
		<img src={large} alt={alt} style={style} />
	</picture>
);
 

export default Img