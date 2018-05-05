
import React from 'react'
import PropTypes from 'prop-types'


export const MyForm = ({children, ...props}) => {
	return (
		<ul>
	 		{React.Children.map(children, child => <div>{child}</div>)}
		</ul>
	)
}

const FormInput = ({FormLabel, placeholder}) => {
	return (
		<div>
			<label>{FormLabel}</label><input type="text" placeholder={placeholder.toLowerCase()} />
		</div>
	)
}

export const AddressInput = ({AddressLabel}) => {
	return (
		<FormInput FormLabel={AddressLabel} placeholder={AddressLabel}/>
	)
}

export const PhoneInput = ({PhoneType}) => {
	return (
		<FormInput FormLabel={`${PhoneType} Phone`} placeholder={`${PhoneType} phone`}/>
	)
}