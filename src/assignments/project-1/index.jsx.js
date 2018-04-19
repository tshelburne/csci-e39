import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import Button from '../../ui/components/button.jsx'
import Footer from '../../ui/components/footer.jsx'
import Nav from '../../ui/components/nav.jsx'



const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <main className = "main-container">
		<Nav />
		<h1 className = "upload-header">My Photo Album</h1>
		<section className= "grid-container">			
			<article className = "description"><p>Simply start uploading photos to get started. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Stuck? We've got you covered! Click the link below for some ideas. </p><Button /> </article>
			<section className = "album-wrapper">
				<h2>Upload Images</h2>
				{/* do not delete this uploader component */}
				<Uploader upload={actions.upload} />
				{/* do not delete this uploader component */}

				<h2 className = "progress-header">In Progress</h2>
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
							{!error && <section className = "img-container"><img src={url}/></section>}
							{!!error && <p className="failure">{error}</p>}
						</li>
					})}
				</ul>
			</section>
		</section>
		<footer><Footer item1='Facebook' item2='Instagram' item3='Twitter' /></footer>
	</main>
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
