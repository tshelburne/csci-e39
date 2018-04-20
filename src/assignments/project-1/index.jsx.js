import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import CompletedFiles from './CompletedFiles.jsx'
import PendingFiles from './PendingFiles.jsx'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>
		<main>
			<header id="head">
				<center><h1>Comic Characters</h1></center>
			</header>
			<section id="uploader">
				<h2>Upload Images</h2>
					<form>
						{/* do not delete this uploader component */}
						<Uploader upload={actions.upload} />
						{/* do not delete this uploader component */}
					</form>
			</section>
			<PendingFiles files={pendingFiles}/>
			<CompletedFiles files={completedFiles}/>
		</main>
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
