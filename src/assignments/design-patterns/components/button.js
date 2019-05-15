import React from 'react'

import autobind from 'class-autobind'
import icon from './flip.png'
class Button extends React.Component {

  constructor() {
    super(...arguments)
  }

  render() {
    const { text, active, style} = this.props
    let className = 'button'
    if (style) {
      className = className + ' ' + style
    }

	return <button
      className={className}>
			{!!text && <span>{text}</span>}
      {!text && <span> Click me!</span>}
		</button>
	}
}

export default Button
