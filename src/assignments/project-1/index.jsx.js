import React from "react";
import PropTypes from "prop-types";
import Uploader from "../../ui/components/uploader.jsx";

import InProgress from "./components/in-progress.jsx.js";
import Completed from "./components/completed.jsx.js";
const Uploads = ({ uploads, actions }) => {
	const pendingFiles = uploads.files.filter(
		({ progress }) => progress && progress < 100
	);
	const completedFiles = uploads.files.filter(({ progress }) => !progress);
	return (
		<div className="app-container">
			<div className="album-copy">
				<p>
					An album is a collection of audio recordings issued as a
					single item on CD, record, audio tape or another medium.
					Albums of recorded music were developed in the early 20th
					century, first as books of individual 78rpm records, then
					from 1948 as vinyl LP records played at ​33 1⁄3 rpm. Vinyl
					LPs are still issued, though in the 21st-century album sales
					have mostly focused on compact disc (CD) and MP3 formats.
					However, vinyl sales have been on the rise in recent years.
					The audio cassette was a format used alongside vinyl from
					the 1970s into the first decade of the 2000s. <br /> An
					album may be recorded in a recording studio (fixed or
					mobile), in a concert venue, at home, in the field, or a mix
					of places. The time frame for completely recording an album
					varies between a few hours and several years. This process
					usually requires several takes with different parts recorded
					separately, and then brought or "mixed" together. Recordings
					that are done in one take without overdubbing are termed
					"live", even when done in a studio. Studios are built to
					absorb sound, eliminating reverberation, so as to assist in
					mixing different takes; other locations, such as concert
					venues and some "live rooms", allow for reverberation, which
					creates a "live" sound. The majority of studio recordings
					contain an abundance of editing, sound effects, voice
					adjustments, etc. With modern recording technology,
					musicians can be recorded in separate rooms or at separate
					times while listening to the other parts using headphones;
					with each part recorded as a separate track.
				</p>
			</div>
			<div className="uploader-container">
				<h1>Upload Images</h1>
				{/* do not delete this uploader component */}
				<Uploader upload={actions.upload} />
				{/* do not delete this uploader component */}
			</div>
			<InProgress pendingFiles={pendingFiles} />
			<Completed completedFiles={completedFiles} />
		</div>
	);
};

const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`])
		.isRequired,
	message: PropTypes.string.isRequired
});

Uploads.propTypes = {
	uploads: PropTypes.shape({
		files: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
					.isRequired,
				name: PropTypes.string.isRequired,
				progress: PropTypes.number,
				url: PropTypes.string,
				error: PropTypes.string
			})
		).isRequired,
		update: statusPropType.isRequired,
		delete: statusPropType.isRequired,
		share: statusPropType.isRequired
	}).isRequired,
	actions: PropTypes.object.isRequired
};

export default Uploads;
