import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import jsxToString from 'jsx-to-string'
import beautify from 'js-beautify'
import Logo, {LogoSmall, LogoLarge} from './logo'
import '../logo.scss'


function Footer(props) {
	  
  
  
  if (!props.links) {
      
      return <div>Wait for it... </div>;
      
    } else {

      return (  
      	<div className="footer">
           <h3 className="footer-title">{props.title}</h3>
           
           <LogoSmall/>

           <ul className="footer-ul">
            {props.links
              .filter(link => (link.id < 12))
              .map(link => (
                <li className="footer-link" key={link.id}>
                  <a href={link.thumbnailUrl}>{link.title}</a>
                </li>
              ))    
            }

           </ul>
           
        </div> 
        )
  }    
}


Footer.propTypes = {
	title: PropTypes.string,
}

Footer.contextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default Footer