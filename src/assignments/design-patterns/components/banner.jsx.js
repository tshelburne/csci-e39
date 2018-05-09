import React from 'react'

const UIBanner = ({title, body, backgroundImg}) =>
	<section className='banner' style={{background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.55)), url(" + backgroundImg + ") center no-repeat, #131418", backgroundSize: 'cover'}}>
		<h2>{title}</h2>
		<p>{body}</p>
	</section>

export const Banner = ({title, body, backgroundImg}) =>
	<UIBanner title={title} body={body} backgroundImg={backgroundImg}></UIBanner>

Banner.displayName = 'Banner'
