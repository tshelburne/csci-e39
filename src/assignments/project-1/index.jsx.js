import React from 'react'
import PropTypes from 'prop-types'
// import Uploader from '../../ui/components/uploader.jsx'
import UploaderA11y from './components/uploaderA11y.jsx'
import PendingFiles from './components/pendingFiles.jsx'
import CompletedFiles from './components/completedFiles.jsx'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>
		<h1>Upload Images</h1>
		{/* do not delete this uploader component */}
		<UploaderA11y upload={actions.upload} />
		{/* do not delete this uploader component */}

		<PendingFiles pendingFiles={FAKEFILES} />

		<CompletedFiles completedFiles={completedFiles} />
	</div>
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

const FAKEFILES = [
	{
		id: "1",
		name: "photo1",
		progress: "10",
	},
	{
		id: "2",
		name: "Photo with a long file name IMS_0123.jpg",
		progress: "33",
	},
	{
		id: "3",
		name: "photo3",
		progress: "69",
	},
	{
		id: "4",
		name: "photo4",
		progress: "100",
	},
];

export default Uploads
