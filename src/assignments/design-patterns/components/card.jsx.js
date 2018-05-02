import React from 'react'

const Card = ({title, body, buttonText, buttonUrl}) =>
	<div className='card'>
		<h2>{title}</h2>
		<p>{body}</p>
		<a href="{buttonUrl}">{buttonText}</a>
	</div>

export const SingleCard = ({title, body, buttonText, buttonUrl}) =>
	<Card title={title} body={body} buttonText={buttonText} buttonUrl={buttonUrl}></Card>

SingleCard.displayName = 'SingleCard'
