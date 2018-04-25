import React from 'react'
import PropTypes from 'prop-types'
import Uploader from './components/uploader.jsx'
import Header from './components/header.jsx'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>
	  <Header text={"Share your photos with a community of file hoarders."}/>
		{/* do not delete this uploader component */}
		<section id="upload-image">
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}
		</section>
    
    <section id="upload-progress">
		<h2>In Progress</h2>		
		<ul>
			{pendingFiles.map(file => {
				const {id, name, progress} = file

				return <li key={id} >
					<label>{name}</label>
					<progress value={progress} max="100">{progress}%</progress>
				</li>
			})}
		</ul>
		</section>
		<section id="image-gallery">
		<h2>Image Gallery</h2>
		<ul className="gallery">
			{completedFiles.map(file => {
				const {id, name, url, error} = file
				return <li key={id} >
					<label>{name}</label>
					{!error && <img src={url} style={{maxWidth: `100%`}} />}
					{!!error && <p className="failure">{error}</p>}
					{/*TODO: ask for an image description and pass in alt text.*/}
					<input type="text" />
				</li>
			})}
		</ul>
	</section>
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
