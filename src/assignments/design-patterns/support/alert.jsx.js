import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import jsxToString from 'jsx-to-string'
import beautify from 'js-beautify'

const Alert = ({title, subtitle, type, children}, context) => (
		<div className={("alert " + type)}>
			{children}
			{title}<br/>
				<span>{subtitle}</span>
		</div>
)

Alert.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	type: PropTypes.string,
}

export default Alert
