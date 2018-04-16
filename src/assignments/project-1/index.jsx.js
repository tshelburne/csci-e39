import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'

import ProgressBar from './progressbar.jsx';
import Gallery from './gallery.jsx';

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	//created ProgressBar and Gallery components and passed props
	return (
		<div className="container">

			<header>Banner</header>

			<section>
				<Uploader upload={actions.upload} />
				{/* do not delete this uploader component */}
			</section>

			<section>
				<h2>In Progress</h2>
				<ProgressBar pendingFiles={pendingFiles}/>
			</section>

			<main className="gallery-component">
				<Gallery completedFiles={completedFiles}/>
        	</main>

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
