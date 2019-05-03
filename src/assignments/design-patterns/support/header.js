import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import jsxToString from 'jsx-to-string'
import beautify from 'js-beautify'
import Logo, {LogoSmall, LogoLarge} from './logo'
import '../logo.scss'


function Header(props) {
  return (
  	<div className="header">
      <h1>{props.title}</h1>
      <h4>{props.text}</h4>
      <LogoLarge/>
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