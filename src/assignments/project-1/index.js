import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Greeting from './greeting'

import './app.scss'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Muli" />

		<Greeting name="Marissa" />
			<h2>This is children</h2>
		{/* do not delete this uploader component */}
		<div className="upload-btn-wrapper">
			<Uploader upload={actions.upload} />
		</div>
		
		{/* do not delete this uploader component */}

		<h1 class="header">Button</h1>
		<button class="button details">Add more</button>


		<h1 class="header">File inputs</h1>
		<div class="upload-btn-wrapper">
			<button class="button">Upload a file</button>
			<input type="file" id="uploader" class="uploader-input" multiple />
		</div>

		<h2>In Progress</h2>
		<progress value="20" max="100"></progress> {/* put it here for now, remove vars progress*/}
		<ul>
			{pendingFiles.map(file => {
				const {id, name, progress} = file

				return <li key={id}>
					<label>{name}</label>
					<progress value={progress} max="100">{progress}%</progress>
				</li>
			})}
		</ul>

		<h2>Completed</h2>
		<ul>
			{completedFiles.map(file => {
				const {id, name, url, error} = file

				return <li key={id}>
					<label>{name}</label>
					{!error && <img src={url} style={{maxWidth: `200px`}} />}
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
