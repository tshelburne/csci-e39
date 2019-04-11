import React from 'react'

const Button = ({label, importance}) => {
	return <button className={importance}>{label}</button>
}

export default Button