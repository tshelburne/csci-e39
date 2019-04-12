// formerly index.js - if needed move that back!

import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import ProgressBar from './components/progressbar'
import Card from './components/card'
import About from './components/about'
import './app.scss'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

//Add toggle here, if showUpload == True, then show uploads : About
	return <div class="wrapper">
		<section class="top-set">
			<div class="functions">
		<h1>Bauhaus Postcard Examples</h1>
		<h2>Upload Postcard(s)</h2>
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}

		<ul class="img-grid">
			{pendingFiles.map(file => {
				const {id, name, progress} = file
				return <li key={id}>
					//Progress bar component
					<ProgressBar name={name} percentage={progress} />
				</li>
			})}
		</ul>
	</div>
	<div>
	<About />

	</div>
		</section>

		<h2>Gallery:</h2>
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
