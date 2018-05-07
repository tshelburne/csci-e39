import React from 'react'

const Card = ({name, image, text, animal}) => (
  <div className={"card " + animal}>
    <h2>{name}</h2>
    <img src={image} />
    <p>{text}</p>
  </div>
)

export const KittenCard = ({name, image, text}) =>
  <Card name={name} image={image} text={text} animal="kitten" />

KittenCard.displayName = 'KittenCard'

export const BearCard = ({name, image, text}) =>
  <Card name={name} image={image} text={text} animal="bear" />

BearCard.displayName = 'BearCard'
