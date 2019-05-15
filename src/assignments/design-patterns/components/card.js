
import React from 'react'
import Image from './image.js'
import Button from './button.js'
import autobind from 'class-autobind'

class Card extends React.Component {

  constructor() {
  super(...arguments)
  autobind(this)
  this.state = {
    displayImage: true
  }
  // This binding is necessary to make `this` work in the callback
  this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay(e) {
   this.setState(state => ({
     displayImage: !state.displayImage
   }));
  }

  render() {
    const { title, description, image, button } = this.props

    return <div className="card">
      <h2>{title}</h2>
      <p> {description} </p>
      {!!image && <Image
        subject={image.subject}
        width={image.width}
        height={image.height}>
        alt={image.alt}
      </Image>}
      {!!button && <Button text={button.text}>
      </Button>}
    </div>
  }
}

export default Card
