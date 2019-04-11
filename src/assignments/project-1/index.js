import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import ProgressBar from './components/progressbar'
import Card from './components/card'
import './app.scss'


const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>
		<header>
		<a href="./canvas.html">Create an image</a></header>
		<h1>Upload Images</h1>
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}

		<h2>In Progress</h2>
		<ul class="img-grid">
			{pendingFiles.map(file => {
				const {id, name, progress} = file
				return <li key={id}>
					//Progress bar component
					<ProgressBar name={name} percentage={progress} />
				</li>
			})}
		</ul>

		<h2>Bauhaus Postcards</h2>
		<ul class="card-grid">
			{completedFiles.map(file => {
				//Card component called here for each uploaded image
				return  <Card {...file} />
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
