import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import jsxToString from 'jsx-to-string'
import beautify from 'js-beautify'

const ActionBar = ({placement, children}, context) => (
	<div className={("action-bar " + placement)}>
		{children}
	</div>
)

ActionBar.propTypes = {
	placement: PropTypes.string,
}

export default ActionBar
