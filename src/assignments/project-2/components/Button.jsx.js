import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {

 render() {
   const {
     cssclass,
     content,
     openThisSite,
     ...others
   } = this.props;
   
   return (
     <div className="button-container"><button className={cssclass} onClick={openThisSite} {...others}>{content}</button></div>
   )
 }
}

export default Button