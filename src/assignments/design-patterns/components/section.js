import React from 'react'
import PropTypes from 'prop-types'


const Section = ({title, children, ...props}) => {
	return <section {...props} className="section">
		<h1 className="section--title">{title}</h1>
		<div className="section--content">
			{children}
		</div>
	</section>
}

Section.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Section