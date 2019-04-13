import React from 'react'

const Button = ({name, id}) => {
	return <label htmlFor={id} className="button">{name}</label>
}

export default Button
