import React from 'react'


const Heading = ({title}) => {
	return <h1 className="heading">{title}</h1>
}

export default Heading

export const HeadingH2 = ({title}) => {
	return <h2 className="heading">{title} </h2>
}

export const HeadingH3 = ({title}) => {
	return <h3 className="heading">{title} </h3>
}

export const HeadingH4 = ({title}) => {
	return <h4 className="heading">{title} </h4>
}