import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Label extends React.Component {
    render() {
      return <label tabIndex="0" htmlFor="uploader" className="uploader">Upload Images</label>;
    }
  }
export default Label
