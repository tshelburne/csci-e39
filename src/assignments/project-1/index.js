import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Greeting from './greeting'
import PolaroidGrid from './polaroidgrid.js'
import Footer from './footer.js'
import Completed from './completed.js'

import './app.scss'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)
	const albumColor = "pink"

	return <body>
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Muli" />
		<div class="album-container">

			<Greeting color={albumColor} />
				<h2>For lovers of all things {albumColor}.</h2>
			
			<PolaroidGrid files={completedFiles} />
			
			<h1 class="header">Not enough {albumColor}? Add more.</h1>
			<div class="actions-container">
				<div class="group-actions">
					{/* do not delete this uploader component */}
					<Uploader upload={actions.upload} class="button"/>
					{/* do not delete this uploader component */}

					{pendingFiles.map(file => {
							const {id, name, progress} = file

							return <li key={id}>
								<label>{name}</label>
								<progress value={progress} max="100">{progress}%</progress>
							</li>
					})}
				</div>
				
				<Completed completedFiles={completedFiles}/>
				
			</div>
		</div>

		<Footer />
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
