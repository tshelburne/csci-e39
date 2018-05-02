import React from 'react'

const Message = ({title, message}) =>
	<div className='message'>
		<h2>{title}</h2>
		<p>{message}</p>
	</div>

	export const GeneralMessage = ({title, message}) =>
		<Message messageTitle={title} message={message}></Message>

	GeneralMessage.displayName = 'GeneralMessage'

export const ErrorMessage = ({title, message}) =>
	<Message messageTitle={title} message={message}></Message>

ErrorMessage.displayName = 'ErrorMessage'

export const SuccessMessage = ({title, message}) =>
	<Message messageTitle={title} message={message}></Message>

SuccessMessage.displayName = 'SuccessMessage'
