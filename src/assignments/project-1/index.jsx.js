import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import {Button} from './components/Button.jsx'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div className="uploader-container">
		<section className="upload-files">
			<h1>Upload Images</h1>
			{/* do not delete this uploader component */}
			<Uploader upload={actions.upload} />
			{/* do not delete this uploader component */}
			<Button text="Choose Files"/>

			<ul aria-label="In Progress" className="in-progress">
				{pendingFiles.map(file => {
					const {id, name, progress} = file

					return <li key={id}>
						<progress value={progress} max="100">{progress}%</progress>
						<label>{name}</label>
					</li>
				})}
				{/*<li><progress value="50" max="100"></progress><label>test</label></li>*/}
				{/*<li><progress value="50" max="100"></progress><label>test</label></li>*/}
				{/*<li><progress value="50" max="100"></progress><label>test</label></li>*/}
				{/*<li><progress value="50" max="100"></progress><label>test</label></li>*/}
			</ul>
		</section>
		<section className="gallery">
			<h1>Gallery</h1>
			<p>To choose an image from your computer, select the image icon. Then, select Or upload your own image to pick the image you want to upload. Select the file, then select Open. </p>
			<ul className="album">
				{completedFiles.map(file => {
					const {id, name, url, error} = file

					return <li key={id} onClick={() => alert('test')}>
					<figure>
						{!error && <img src={url} />}
						<figcaption>{name}</figcaption>
						{!!error && <p className="failure">{error}</p>}
					</figure>
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
