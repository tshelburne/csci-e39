import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class LabelHelper extends React.Component {
    render() {
      return <svg height="0" width="0">
      <defs>
        <clipPath id="clipping">
         <rect x="110" y="0" width="200" height="50"/>
        </clipPath>
      </defs>
    </svg>;
    }
  }
export default LabelHelper
