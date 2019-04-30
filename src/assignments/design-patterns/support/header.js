import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import jsxToString from 'jsx-to-string'
import beautify from 'js-beautify'



function Header(props) {
  return (
  	<div className="header">
      <h1>{props.title}</h1>
      <h2>{props.text}</h2>
    </div> 
    );
}


Header.propTypes = {
	name: PropTypes.string,
}

Header.contextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default Header