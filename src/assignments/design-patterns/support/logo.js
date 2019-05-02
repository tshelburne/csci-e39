import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import jsxToString from 'jsx-to-string'
import beautify from 'js-beautify'



function Logo(props) {
var size = (props.size == "small") ? "50" : "100";
var url = "https://www.fillmurray.com/g/" + size + "/" + size;

    return (
      <picture>
        <img src={url} className={props.cssClassName}></img>
      </picture> 
      );
 
}


Logo.propTypes = {
	size: PropTypes.string,
}

Logo.contextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default Logo