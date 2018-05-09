import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({name, image, text, species}) => (
  <div className={"card " + species}>
    <h2>{name}</h2>
    <img src={image} />
    <p>{text}</p>
  </div>
)

export const KittenCard = ({name, image, text}) =>
  <Card name={name} image={image} text={text} species="kitten" />

KittenCard.displayName = 'KittenCard'

export const BearCard = ({name, image, text}) =>
  <Card name={name} image={image} text={text} species="bear" />

BearCard.displayName = 'BearCard'

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  species: PropTypes.oneOf([
    'kitten', 'bear'
  ])
}
