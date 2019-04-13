import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import ProgressBar from '../../ui/components/progressbar'
import PhotoGallery from '../../ui/components/photoGallery'
import Album from '../../ui/components/album'

import './app.scss'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress <= 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div class="wrapper">
	  <header class="header">
		<p> <h3> My first React app !! This app can be used to upload pictures. In the next release it will also support
		album functionality</h3></p>
		</header>
		<nav class="nav">
	  {/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
  	<Album/>
		</nav>
    <article class="content">
			<ProgressBar inProgress={pendingFiles}/>
			<PhotoGallery completedFiles={completedFiles}/>
		</article>
		<footer class="footer"></footer>
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
