import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import {PendingFiles, CompletedFiles} from '../../ui/components/files.js'

import './app.scss'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>
		{(completedFiles.length > 0) &&
			<React.Fragment>
				<h1>Photo Gallery</h1>
				<CompletedFiles files={completedFiles} update={actions.files.updateFile} />
			</React.Fragment>
		}

		{(pendingFiles.length > 0) &&
			<React.Fragment>
				<h2>In Progress</h2>
				<PendingFiles files={pendingFiles} />
			</React.Fragment>
		}

		<h1>Upload To Gallery</h1>
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}
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

export default Uploads
