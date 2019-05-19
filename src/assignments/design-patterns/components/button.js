import React from 'react'
import Picture from './picture'


const Button = ({name, id, onClick}) => {
	return <button htmlFor={id} className="basic-button" onClick={onClick}>{name}</button>
}

export default Button