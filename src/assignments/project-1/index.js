import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'

import ImageGallery from './imagegallery.js'
import PendingUpload from './pendingupload.js'


import './app.scss'
import './progressbar.css';
import './uploadbutton.scss';
import './imagegallery.scss';
import './imagecard.scss';
import './index.scss';

const Uploads = ({uploads, actions}) => {

	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return (
		<div className="main-container">
			<h1 className="main title">Album Uploader</h1>
			{/* do not delete this uploader component */}
			 <Uploader upload={actions.upload} />
			{/* do not delete this uploader component */}

			<h2 className="inprogress title">In Progress</h2>
			<PendingUpload uploaddata= {pendingFiles} />

			<h2 className="inprogress title">Gallery</h2>
			<div className="container-completed">
				<ImageGallery images= {completedFiles} ></ImageGallery>
			</div>
	</div>
	)


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
