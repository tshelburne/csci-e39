import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Album from './components/album'
import AlbumUpload from './components/album_upload'

import './layout/layout.scss'
import './app.scss'


const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <main className="main_page">

		<header className="main-heading"> Online Image Album csci-e39 </header>

		<div className="grid-container">

			<aside className="sidebar">

				<h2>Upload Images</h2>

				{/* do not delete this uploader component */}
				<Uploader upload={actions.upload} label="Choose Files to Upload!"/>
				{/* do not delete this uploader component */}

			</aside>

			<main className="main">

				<h2>Albums</h2>

				<p> This a where you can view the upload status and view recently uploaded images</p>
				<p> Click to embiggen image.</p>

				<p> Currently the album contain nature photos taken at great meadows national wildlife sactuary in Concord Ma. The sactuary contains a lot of wildlife including many species of migratory birds. </p>
						<AlbumUpload imgData={pendingFiles} albumName="In Progress Files"/>
				<Album imgData={completedFiles} albumName="Completed Files"/>

			</main>
		</div>
	</main>

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

}
export default Uploads
