import React from 'react'
import PropTypes from 'prop-types'

const CardFooter = ({title, children,...props}) => {
  return <div {...props} className="footer" >
     <h5>{title}</h5>
     <p>{children}</p>
    </div>
}

CardFooter.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CardFooter
