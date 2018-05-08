import React from 'react'
import {Button, GhostButton} from './button.jsx'
import {Image} from './image.jsx'

const SingleCard = ({title, body, btnText, btnUrl, image, imageAlt}) =>
	<div className='card'>
		<Image link={image} alt={imageAlt} />
		<div className='card-text'>
			<h2>{title}</h2>
			<p>{body}</p>
			<Button linkText={btnText} url={btnUrl} />
		</div>
	</div>

export const Card = ({title, body, btnText, btnUrl, image, imageAlt}) =>
	<SingleCard title={title} body={body} btnText={btnText} btnUrl={btnUrl} image={image} imageAlt={imageAlt}></SingleCard>

Card.displayName = 'Card'
