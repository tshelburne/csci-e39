import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import ProgressBar from '../../ui/components/progress-bar.js'
import Album from '../../ui/components/album'
import Modal from '../../ui/components/image-modal'

import './app.scss'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div id="grid-container">
		<h1 id="gallery-header">Gallery</h1>
		<ul class="album">
			{completedFiles.map(file => {
				return <Album file={file}/>
			})}
		</ul>

		<div class="uploader-container">
			<h2 class="uploader">Upload Images</h2>
            {/* do not delete this uploader component */}
			<Uploader upload={actions.upload} />
            {/* do not delete this uploader component */}

			<ul>
                {pendingFiles.map(file => {
                    return <ProgressBar file={file}/>
                })}
			</ul>
		</div>

		<Modal/>

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
