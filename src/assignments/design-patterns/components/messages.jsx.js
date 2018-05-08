import React from 'react'

const Message = ({message, msgType}) =>
	<div className={msgType}>
		<p>{message}</p>
	</div>

	export const InfoMessage = ({message}) =>
		<Message message={message} msgType='message info'></Message>

	InfoMessage.displayName = 'InfoMessage'

	export const AlertMessage = ({message}) =>
		<Message message={message} msgType='message alert'></Message>

	AlertMessage.displayName = 'AlertMessage'

	export const ErrorMessage = ({message}) =>
		<Message message={message} msgType='message error'></Message>

	ErrorMessage.displayName = 'ErrorMessage'

	export const SuccessMessage = ({message}) =>
		<Message message={message} msgType='message success'></Message>

	SuccessMessage.displayName = 'SuccessMessage'
