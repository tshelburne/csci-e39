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
	console.log("pending files are ", pendingFiles);
	return (
		<div>
			<h1>Upload Images</h1>
			{/* do not delete this uploader component */}
			<Uploader upload={actions.upload} />
			{/* do not delete this uploader component */}

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
