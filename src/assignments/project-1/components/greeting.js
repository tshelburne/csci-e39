import React from 'react'

const Greeting = (props) => {

	const specialClass = props.special ? "specialHeader" : "header"
		return <h2 className={specialClass}> {props.greeting} {props.name}</h2>
}


export default Greeting
