import React from 'react'
import PropTypes from 'prop-types'

class CardHeader extends React.Component {
  render() {
    const {image} = this.props;
    var style = {
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title">Title</h4>
      </header>
    )
  }
}

export default CardHeader
