import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import jsxToString from 'jsx-to-string'
import beautify from 'js-beautify'



function Footer(props) {
  return (
  	<div className="footer">
      <h3>{props.name}</h3>
    </div> 
    )
}


Footer.propTypes = {
	name: PropTypes.string,
}

Footer.contextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default Footer