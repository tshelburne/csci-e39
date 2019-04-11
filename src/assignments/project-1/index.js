import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Greeting from './greeting'

import './app.scss'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <body>
	<div class="container">
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Muli" />

		<Greeting name="Marissa" />
			<h2>Upload as many photos as you like!</h2>
		<div class="polaroid-grid">
			{completedFiles.map(file => {
				const {id, name, url, error} = file

				return <figure key={id} class="polaroid">
					{!error && <img src={url} alt={name}/>}
					{!!error && <p className="failure">{error}</p>}
					<figcaption class="polaroid-caption">{name}</figcaption>
				</figure>
			})}
		</div>
		
		<h1 class="header">Album Actions</h1>
		<div class="actions">
			{/* do not delete this uploader component */}
			<Uploader upload={actions.upload} class="button"/>
			{/* do not delete this uploader component */}

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

		{/*<h2>In Progress</h2>
		<progress value="20" max="100"></progress> {/* put it here for now, remove vars progress
		<ul>
			{pendingFiles.map(file => {
				const {id, name, progress} = file

				return <li key={id}>
					<label>{name}</label>
					<progress value={progress} max="100">{progress}%</progress>
				</li>
			})}
		</ul>*/}	

		<h2>Completed</h2>
		<ul>
			{completedFiles.map(file => {
				const {id, name, url, error} = file

				return <li key={id}>
					<label>{name}</label>
					{!!error && <p className="failure">{error}</p>}
				</li>
			})}
		</ul>

		

	</div>
	<footer class="container">
	<ul>
		<li>
			<a href="/contact-us">CONTACT</a>
		</li>
		<li>
			<a href="/faq">FAQ</a>
		</li>
		<li>
			<a href="/journal">ADVERTISE</a>
		</li>
		<li>
			<a href="/terms-of-use">TERMS OF USE</a>
		</li>
	</ul>	
</footer>
</body>
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
