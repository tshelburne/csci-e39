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
      <div className="button-container"><button className={cssclass} onClick={this.onButtonClick} {...others}>{content}</button></div>
    )
  }

  onButtonClick() {
        {openThisSite}
  }
}

export default Button