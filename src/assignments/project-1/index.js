import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Album from './components/album'
import Header2 from './components/header2'

import './layout/layout.scss'
import './app.scss'


const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div className="grid-container">
			{sidebarActive && <aside className="sidebar">Sometimes renders!

			</aside>}
			<main className="main">Main




				<h1>Upload Images</h1>
		{/* do not delete this uploader component */}

		<Uploader upload={actions.upload} label="Choose Files to Upload!" />
		{/* do not delete this uploader component */}

		<Header2 headingText="In Progress" />

				<Album imgData={pendingFiles} albumName="In Progress Files"/>

				<Album imgData={completedFiles} albumName="Completed Files"/>
			</main>
		</div>



// Components



const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
	message: PropTypes.string.isRequired,
})

Uploads.propTypes = {
	uploads: PropTypes.shape({
		files: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string,
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
