import React from 'react'
import PropTypes from 'prop-types'

const Card = ({cardTitle, cardFooter, children, ...props}) => {
  return <div {...props} className="card-styles">
      <h2>{cardTitle}</h2>
      {children}
      <p><small>{cardFooter}</small></p>
    </div>
}

Card.propTypes = {
  	cardTitle: PropTypes.string,
    cardFooter: PropTypes.string,
  }

export default Card;
