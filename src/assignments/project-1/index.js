import React from 'react';
import PropTypes from 'prop-types';
import Uploader from '../../ui/components/uploader';
import ProgressBar from '../../ui/components/ProgressBar';
import UploadedItem from '../../ui/components/UploadedItem';

import './app.scss';

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <React.Fragment>
		<header>
			<h1>Upload Images</h1>
			<Uploader upload={actions.upload} />
		</header>

		<aside>
			<h2>In Progress</h2>
			<ul>
				{pendingFiles.map(file => {
					const {id, name, progress} = file

					return <li key={id}>
						<ProgressBar name={name} progress={progress} />
					</li>
				})}
			</ul>
		</aside>

		<main>
			<h2>Completed</h2>
			<ul className="completed-uploads">
				{completedFiles.map(file => {
					const {id, name, url, error} = file

					return <li key={id}>
						<UploadedItem id={id} name={name} url={url} error={error} />
					</li>
				})}
			</ul>
		</main>

	</React.Fragment>
}

const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
	message: PropTypes.string.isRequired,
})

Uploads.propTypes = {
	uploads: PropTypes.shape({
		files: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
			name: PropTypes.string.isRequired,
			progress: PropTypes.number,
			url: PropTypes.string,
			error: PropTypes.string,
		})).isRequired,
		update: statusPropType.isRequired,
		delete: statusPropType.isRequired,
		share: statusPropType.isRequired,
	}).isRequired,
	actions: PropTypes.object.isRequired,
}

export default Uploads
