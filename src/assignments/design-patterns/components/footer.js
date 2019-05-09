import React from 'react'
import PropTypes from 'prop-types'


const Footer = ({title, children, ...props}) => {
	return <footer {...props} className="footer">
		<h4 className="footer--title">{title}</h4>
		<div className="footer--content">
			{children}
		</div>
	</footer>
}

Footer.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Footer