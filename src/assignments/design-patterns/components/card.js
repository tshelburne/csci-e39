import React from 'react'
import PropTypes from 'prop-types'
import CardHeader from './card-header'
import CardBody from './card-body'

const Card = ({title, children, image, date, ...props}) => {
  return <article {...props} className="card" >
  <CardHeader image={image} />
  <CardBody title={title} text={children} date={date}/>
  </article>
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Card
