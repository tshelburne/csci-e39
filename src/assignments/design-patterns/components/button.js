import React from 'react'

const Button = ({name, id, onClick}) => {
	return <button htmlFor={id} className="button" onClick={onClick}>{name}</button>
}

export default Button