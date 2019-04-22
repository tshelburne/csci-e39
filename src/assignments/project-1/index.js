import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Card from './components/card'
import FailureCard from './components/failure-card'
import Gallery from './components/gallery'

import './app.scss'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)
	const failedFiles = completedFiles.filter(file => file.error)
	const successfulFiles = completedFiles.filter(file => !file.error)

	return <div>
		<h1>Headshots</h1>
		<h2>Upload a Headshot</h2>
		<p>Select an image file under 500KB to add to your headshot to the gallery.</p>
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}

		<p>just a sample to test UI:</p>
		<progress value="40" max="100"></progress>

		{pendingFiles.length > 0 && <div>
				<h2>In Progress</h2>
				<ul>
					{pendingFiles.map(file => {
						const {id, name, progress} = file
						return <li key={id}>
							<label>{name}</label>
							<progress value={progress} max="100">{progress}%</progress>
						</li>
					})}
				</ul>
			</div>
		}

		{failedFiles.length > 0 && 	<div>
				<h2>Failed Uploads</h2>
				<ul data-filter="true">
					{failedFiles.map(file => {
						const {id, name, url, error} = file
						return <FailureCard { ...file } />
					})}
				</ul>
			</div>
		}

		{successfulFiles.length > 0 && 	<div>
			<Gallery successfulFiles={successfulFiles}/>
			</div>
		}

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
