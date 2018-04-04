import React from 'react';
import PropTypes from 'prop-types';
import Uploader from '../../ui/components/uploader.jsx';
import Header from './header.jsx';
import Completed from './completed.jsx';

const Uploads = ({ uploads, actions }) => {
	const pendingFiles = uploads.files.filter(({ progress }) => progress && progress < 100);
	const completedFiles = uploads.files.filter(({ progress }) => !progress);

	return (
		<div>
			<Header tagline="Jay's Little Image Uploader" />

			<div className="upload-component">
				<form action="#">
					<label tabindex="0" for="uploader" className="uploader">
						Upload Files
						{/* do not delete this uploader component */}
						<Uploader upload={actions.upload} />
						{/* do not delete this uploader component */}
					</label>
				</form>
			</div>

			<div className="progress-component">
				<h2>In Progress</h2>
				<ul>
					{pendingFiles.map(file => {
						const { id, name, progress } = file;

						return (
							<li key={id}>
								<label>{name}</label>
								<progress value={progress} max="100">
									{progress}%
								</progress>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="completed-component">
				<h2>Completed</h2>
				<div className="completed-grid">
					<ul>
						{completedFiles.map(file => {
							const { id, name, url, error } = file;

							return (
								<li key={id}>
									<label>Image {id}</label>
									{!error && <img src={url} />}
									{!!error && <p className="failure">{error}</p>}
								</li>
							);
						})}
					</ul>
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
