import React from 'react'

const UIBanner = ({title, body, buttonText, buttonUrl, background}) =>
	<section className='banner'>
		<h2>{title}</h2>
		<p>{body}</p>
		<a href="{buttonUrl}">{buttonText}</a>
	</section>

export const Banner = ({title, body, buttonText, buttonUrl, backgroundImage}) =>
	<UIBanner title={title} body={body} buttonText={buttonText} buttonUrl={buttonUrl} style={{background: backgroundImage}}></UIBanner>

Banner.displayName = 'Banner'
