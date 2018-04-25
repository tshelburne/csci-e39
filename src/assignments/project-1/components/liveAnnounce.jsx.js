
import React from 'react'
import PropTypes from 'prop-types'

const LiveAnnounce = ({whatToSay}) => {
	return <div className="sr-only" role="status" aria-live="polite">
		{whatToSay}
	</div>
}

export default LiveAnnounce