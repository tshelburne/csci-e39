import React from 'react'

const Header = (props) => {

	const specialClass = props.special ? "c-specialHeader" : "c-header"
		return <h4 className={specialClass}> {props.greeting} {props.name}</h4>
}


export default Header
