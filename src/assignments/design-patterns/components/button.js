import React from 'react'

import autobind from 'class-autobind'

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
    const { text, active, onClick, style, alertMessage, flip } = this.props
    let classString = 'btn'
      if (style) {
        classString = classString + ' ' + style
      }
      if (flip) {
        classString = classString + ' flip'
      }

    console.log(classString)


	return <button
      className={classString}
      onClick={onClick || this.defaultOnClick }>
			{!!text && <span data-message={alertMessage}>{text}</span>}
      {!text && <span data-message={alertMessage}>Click me!</span>}
		</button>
	}
}

export default Button
