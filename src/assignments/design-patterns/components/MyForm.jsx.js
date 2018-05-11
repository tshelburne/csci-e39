import React from 'react'

export const MyForm = ({children, ...props}) => {
	return (
		<form className="my-form">
	 		{React.Children.map(children, child => <div>{child}</div>)}
		</form>
	)
}

const FormInput = ({formLabel, placeholder}) => {
	return (
		<div className="form-input-wrapper">
			<label className="form-input-label">{formLabel}</label><input className="form-input" type="text" placeholder={placeholder.toLowerCase()} />
		</div>
	)
}

export const AddressInput = ({addressLabel}) => {
	return (
		<FormInput formLabel={addressLabel} placeholder={addressLabel}/>
	)
}

export const PhoneInput = ({phoneType}) => {
	return (
		<FormInput formLabel={`${phoneType} Phone`} placeholder={`${phoneType} phone`}/>
	)
}