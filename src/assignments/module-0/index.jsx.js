import React from "react";
import PropTypes from "prop-types";

const Module0 = ({ registration: { status, message }, actions }) => (
	<div className="module0-container">
		<section className="submission-section">
			<h1 className="main-heading">Almost done!</h1>
			<p className="main-message">
				You did it! You followed the directions and got your copy of the
				application running. Click the button below to register as
				having completed Module 0.
			</p>
			<div className="button-block">
				<button
					disabled={status === `pending` || status === `success`}
					onClick={actions.register}
					className="call-to-action"
				>
					Complete Assignment
				</button>
			</div>

			{isCompleted(status) && <p className={status}>{message}</p>}
		</section>
		<footer className="footer">
			<p>CSCI-e39</p>
			<p>
				<a href="mailto:natalya.shelburne@nytimes.com">
					Natalya Shelburne
				</a>
			</p>
			<p>Spring 2018</p>
		</footer>
	</div>
);

Module0.propTypes = {
	registration: PropTypes.shape({
		status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`])
			.isRequired,
		message: PropTypes.string.isRequired
	}),
	actions: PropTypes.object.isRequired
};

export default Module0;

function isCompleted(status) {
	return status === `success` || status === `failure`;
}
