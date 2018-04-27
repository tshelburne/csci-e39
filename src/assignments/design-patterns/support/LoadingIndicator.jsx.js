import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

const LoadingIndicator = ({loading, spinnerIcon, color}) => (
	<div className="loading-indicator">
		{loading && <FontAwesome name={spinnerIcon} style={{color:color}} spin/>}
	</div>
)

LoadingIndicator.propTypes = {
	loading: PropTypes.bool,
	spinnerIcon: PropTypes.string,
	color: PropTypes.string
}

export default LoadingIndicator
