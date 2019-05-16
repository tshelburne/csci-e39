import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'

class CardBody extends React.Component {
  render() {
    return ( <div className="card-body">
      <p className="date">{this.props.date}</p>

      <h2>{this.props.title}</h2>

      <p className="body-content">{this.props.text}</p>

      <Button block> Read More..</Button>
    </div>
    )
  }
}

export default CardBody
