import React from 'react'
import PropTypes from 'prop-types'

const Qoute = ({qouteText, qouteSource, qoutePerson, bigQoute, ...props}) => {
  return <div {...props} className={bigQoute ? 'qoute-styles bigQoute' :'qoute-styles'}>
      <blockquote cite={""+ qouteSource}><h3>{qouteText}</h3></blockquote>
      <blockquote><h4>~ {qoutePerson}</h4></blockquote>
      <blockquote><a href={""+ qouteSource}>link to source</a></blockquote>
    </div>
}

Qoute.propTypes = {
  	qouteText: PropTypes.string,
    qouteSource: PropTypes.string,
    qoutePerson: PropTypes.string,
    bigQoute: PropTypes.bool,
  }

export default Qoute;
