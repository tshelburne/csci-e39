import React from 'react'
import PropTypes from 'prop-types'


const Nav = ({title, children, ...props}) => {
	return <nav {...props} className="nav">
		<h1 className="nav--title">{title}</h1>
		<div className="nav--content">
			{children}
		</div>
	</nav>
}

Nav.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Nav