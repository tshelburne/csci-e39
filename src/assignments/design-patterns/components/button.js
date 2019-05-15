import React from 'react'

import autobind from 'class-autobind'
//import icon from './flip.png'
class Button extends React.Component {

  constructor() {
    super(...arguments)

    // This binding is necessary to make `this` work in the callback
    this.defaultOnClick = this.defaultOnClick.bind(this);
  }

//onClick={(e) => console.log('You clicked me!')}>
  defaultOnClick (e) {
      let message = "You clicked me!"
      if (e.target.hasAttribute('data-message')) {
        message = e.target.getAttribute('data-message')
      }
      alert(message)
    }

  render() {
    const { text, active, onClick, style, alertMessage} = this.props
    let className = 'button'
    if (style) {
      className = className + ' ' + style
    }

	return <button
      className={className}
      onClick={onClick || this.defaultOnClick }>
			{!!text && <span data-message={alertMessage}>{text}</span>}
      {!text && <span data-message={alertMessage}>Click me!</span>}
		</button>
	}
}

export default Button
