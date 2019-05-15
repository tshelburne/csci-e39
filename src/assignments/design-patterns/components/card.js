
import React from 'react'
import Image from './image.js'
import Button from './button.js'
import autobind from 'class-autobind'

export class Card extends React.Component {

  constructor() {
  super(...arguments)
  autobind(this)
  this.state = {
    displayBack: true
  }
  // This binding is necessary to make `this` work in the callback
  this.flipCard = this.flipCard.bind(this);
  }

  flipCard(e) {
   this.setState(state => ({
     displayBack: !state.displayBack
   }));
  }

  render() {
    const { title, description, image, button, playingCard, patterned } = this.props
    return <div className={`card${(playingCard && this.state.displayBack) ? ` back` : ``}${(playingCard && patterned && this.state.displayBack) ? ` patterned` : ``}`}>
      <h2>{title}</h2>
      <p> {description} </p>
      {!!image && <Image
        subject={image.subject}
        width={image.width}
        height={image.height}>
        alt={image.alt}
      </Image>}
      {!!button && <Button
        text={button.text}
        onClick={button.onClick}
        alertMessage={button.alertMessage}
        style={button.style}>
      </Button>}
      {!!playingCard && <Button
        text="Flip"
        onClick={this.flipCard}>
      </Button>}
    </div>
  }
}


export const PlayingCard = (props) =>
  <Card {...props} playingCard="true"/>
