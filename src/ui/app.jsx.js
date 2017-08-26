import React from 'react'
import PropTypes from 'prop-types'

const App = ({registration: {status, message}, actions}) =>
	<div>
		<h1>Almost there!</h1>
		<p>
			Congratulations on making it this far! If you've set everything up properly,
			clicking the button below should register you with our system as having
			finished the module 0 exercise.
		</p>
		<button disabled={status === `sending` || status === `success`} onClick={actions.register}>Click Me</button>

		{isCompleted(status) && <p className={status}>{message}</p>}
	</div>

App.propTypes = {
	registration: PropTypes.shape({
		status: PropTypes.oneOf([`init`, `sending`, `success`, `failure`]).isRequired,
		message: PropTypes.string.isRequired,
	}),
	actions: PropTypes.object.isRequired,
}

export default App

function isCompleted(status) {
	return status === `success` || status === `failure`
}