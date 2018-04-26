import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import Screenshot from './components/screenshot.jsx'

const Uploads = ({ uploads, actions }) => {
	const pendingFiles = uploads.files.filter(({ progress }) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({ progress }) => !progress)

	return <div>
		<header>
			{/* TODO: ADD LOGO AND COPY */}
			<img id="headerLogo" src="https://s7.postimg.cc/uwq5d5z1n/playstation_logo.png" alt="Playstation Logo" />
			<div id="headerTextGroup">
				<h1>andmade's PS4 Gallery</h1>
				<h2>A collection of screenshots taken from various Playstation 4 videogames.</h2>
			</div>
		</header>

		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}

		<main>

			<h2>In Progress</h2>
			<ul>
				{pendingFiles.map(file => {
					const { id, name, url, progress } = file

					return <li key={id}>
						<label>{url}</label>
						<progress value={progress} max="100">{progress}%</progress>
					</li>
				})}
			</ul>

			<h2>Completed</h2>
			<ul id="imageGallery" >
				{completedFiles.map(file => {
					const { id, name, url, description, error } = file
					return <Screenshot key={id} name={name} url={url} description={description} error={error} />
				})}
			</ul>

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
