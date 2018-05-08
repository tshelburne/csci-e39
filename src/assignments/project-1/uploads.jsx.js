import React from 'react';
import PropTypes from 'prop-types';
import Uploader from '../../ui/components/uploader.jsx';
import Completed from './completed.jsx';
import Progress from './progress.jsx';
import Copy from './copy.jsx';

const Uploads = ({ uploads, actions }) => {
	const pendingFiles = uploads.files.filter(({ progress }) => progress && progress < 100);
	const completedFiles = uploads.files.filter(({ progress }) => !progress);

	return (
		<div>
			<Copy tagline="What is this?" />
			<div className="upload-component">
				<form action="#">
					<label className="uploader">
						Upload Files
						{/* do not delete this uploader component */}
						<Uploader upload={actions.upload} />
						{/* do not delete this uploader component */}
					</label>
				</form>
			</div>
			<div className="progress-component">
				<h2>In Progress</h2>
				<Progress pendingFiles={pendingFiles} />
			</div>

			<div className="completed-component">
				<h2>Completed</h2>
				<div className="completed-grid">
					<Completed completedFiles={completedFiles} />
				</div>
			</div>
		</div>
	);
};

const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
	message: PropTypes.string.isRequired,
});

Uploads.propTypes = {
	uploads: PropTypes.shape({
		files: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
				name: PropTypes.string.isRequired,
				progress: PropTypes.number,
				url: PropTypes.string,
				error: PropTypes.string,
			})
		).isRequired,
		update: statusPropType.isRequired,
		delete: statusPropType.isRequired,
		share: statusPropType.isRequired,
	}).isRequired,
	actions: PropTypes.object.isRequired,
};

export default Uploads;
