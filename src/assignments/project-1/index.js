import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'

import './app.scss'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>
		{/* Link in Desired Font Families */}
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Roboto"/>
		<h1>Upload Images</h1>
		{/* do not delete this uploader component */}
		<Uploader className="file-form" upload={actions.upload} />
		{/* do not delete this uploader component */}

		<h2>In Progress</h2>
		<ul className = "grid-container">
			{pendingFiles.map(file => {
				const {id, name, progress} = file

				return <li className = "card" key={id}>
					<label className = "card-title">{name}</label>
					<progress value={progress} max="100">{progress}%</progress>
				</li>
			})}
		</ul>

		<h2>Completed</h2>
		<ul className = "grid-container">
			{completedFiles.map(file => {
				const {id, name, url, error} = file

				return <li className = "card" key={id}>
					<label className = "card-title">{name}</label>
					{!error && <img className = "card-img" src={url} />}
					{!!error && <p className="failure">{error}</p>}
				</li>
			})}
		</ul>
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
