import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import Album from '../../ui/components/album.jsx'
import ProgressBars from '../../ui/components/progressBars.jsx'
import Carousel from '../../ui/components/carousel.jsx';


const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div className="container">
		<h1 className="uploader">Upload Images</h1>
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} className="uploader-input"/>
		{/* do not delete this uploader component */}

		<h2>In Progress</h2>
		<ProgressBars pendingItems={pendingFiles}/>

		<h2>Completed</h2>
		<Album uploadedFiles={completedFiles}/>

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
