import React from 'react'
import PropTypes from 'prop-types'

const Module0 = ({registration: {status, message}, actions}) =>
	<div className="module0-container">
		<header className="header">
			CSCI-e39
		</header>
		<section className="submission-section">
			<h1 className="main-message">Almost there!</h1>
			<p>
				Congratulations on making it this far! If you've followed the directions and set up the project,
				clicking the button below should register you with our system as having
				finished the module 0 exercise.
			</p>
			<button disabled={status === `pending` || status === `success`}
				onClick={actions.register}
				className="call-to-action">
				Complete Assignment
			</button>

			{isCompleted(status) && <p className={status}>{message}</p>}
		</section>
	</div>

Module0.propTypes = {
	registration: PropTypes.shape({
		status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
		message: PropTypes.string.isRequired,
	}),
	actions: PropTypes.object.isRequired,
}

export default Module0

function isCompleted(status) {
	return status === `success` || status === `failure`
}