import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import jsxToString from 'jsx-to-string'
import beautify from 'js-beautify'

const Button = ({title, icon, type, link}, context) => (
	<a className={("button " + type)} href={link}>
		{icon && <i className={icon}></i>}
		<span>{title}</span>
	</a>
)

Button.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.string,
	type: PropTypes.string,
	link: PropTypes.string
}

Button.contextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default Button
