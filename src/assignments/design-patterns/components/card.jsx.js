import React from 'react'

export const Card = ( {altText, title, descriptiveText, linkDestination} ) => 

	<div className='card'>
		 <img src="http://fillmurray.com/360/360" alt="{altText}" />
		 <div className="description">
		 	<h3 className="cardTitle">{title}</h3>
		 	<p>{descriptiveText}</p>
		 	<p><a href="{linkDestination}" target="_blank">More &raquo;<span></span></a></p>
		 </div>
	</div>