import React from 'react'

const Section = ({children, sectionClass}) =>
	<section className={sectionClass}>
		{children}
	</section>

export default Section