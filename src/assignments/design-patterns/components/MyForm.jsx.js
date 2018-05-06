
import React from 'react'
import PropTypes from 'prop-types'


export const MyForm = ({children, ...props}) => {
	return (
		<form className="my-form">
	 		{React.Children.map(children, child => <div>{child}</div>)}
		</form>
	)
}

const FormInput = ({FormLabel, placeholder}) => {
	return (
		<div className="form-input-wrapper">
			<label className="form-input-label">{FormLabel}</label><input className="form-input" type="text" placeholder={placeholder.toLowerCase()} />
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