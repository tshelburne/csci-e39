import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'

import './app.scss'


const Uploads = ({ uploads, actions }) => {
	const pendingFiles = uploads.files.filter(({ progress }) => progress && progress < 100)
	const pendingFilesTotal = pendingFiles.length;
	const completedFiles = uploads.files.filter(({ progress }) => !progress)

	return <React.Fragment>
		<div className="wrapper">
			<header>
				<h1>California Days</h1>
			</header>

			<main>
					<label for="uploader" class="uploader"><i class="fas fa-camera-retro" aria-hidden="true"></i> Add Photos</label>
					{/* do not delete this uploader component */}
					<Uploader id="uploader" className="uploader-input" upload={actions.upload} />
					{/* do not delete this uploader component */}


					{pendingFilesTotal > 0 && <h3>Photos In Progress</h3>}
					<ul className="in-progress-imgs">
						{pendingFiles.map(file => {
							const { id, name, progress } = file
							return <li key={id}>
								<label>{name}</label>
								<progress value={progress} max="100">{progress}%</progress>
							</li>
						})}
					</ul>
						
					<nav>
					<ul className="tabs">
						<li><button className="active"><i class="fas fa-th" aria-hidden="true"></i> Album</button></li>
						<li><button><i class="fas fa-question" aria-hidden="true"></i> FAQ</button></li>
					</ul>
					</nav>
					

				<div>
					<ul className="completed-imgs">
						{completedFiles.map(file => {
							const { id, name, url, error } = file
							const labelName = name.substr(0, name.lastIndexOf('.')) || name; //remove file extension

							return <li key={id}>
								{!error && <img id={id} src={url} alt={labelName} />}
								{!!error && <p className="failure">{error}</p>}
								<label>{labelName}</label>
							</li>
						})
						}
					</ul>
				</div>
			</main>
		</div>
	</React.Fragment>
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
