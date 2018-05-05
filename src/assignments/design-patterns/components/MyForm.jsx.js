
import React from 'react'
import PropTypes from 'prop-types'


export const MyForm = ({children, ...props}) => {
	return (
		<ul>
	 		{React.Children.map(children, child => <div>{child}</div>)}
		</ul>
	)
}


export const FormInput = ({FormLabel, placeholder}) => {
	return (
		<div>
			<label>{FormLabel}</label><input type="text" placeholder={placeholder} />
		</div>
	)
}