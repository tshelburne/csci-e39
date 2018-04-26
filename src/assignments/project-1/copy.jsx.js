import React from 'react';
import PropTypes from 'prop-types';

const Copy = props => (
	<div className="copy-grid">
		<div className="copy-content">
			<h3>{props.tagline}</h3>
			<p>
				This project is for CSCI-39 and have taughtme some of the basics of organizing my React.js projects and
				implementing a basic design system. This is also the “copy” part of the assignment.
			</p>
		</div>
	</div>
);

Copy.propTypes = {
	tagline: PropTypes.string.isRequired,
};

export default Copy;
