import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'

import './app.scss'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>

		<div className="example-container">
			<h1 className="header">Button</h1>
			<button className="button">Add more</button>
		</div>


		<h1>Upload Images</h1>
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}


		<h1 className="header">File inputs</h1>
		<form action="#" className="file-form">
			<input type="file" id="uploader" className="uploader uploader-input" data-multiple-caption="{count} files selected" multiple >
			<label tabindex="0" for="uploader" className="uploader"><span></span><strong>Upload Files</strong></label>
		</form>


		<h2>In Progress</h2>
		<ul>
			{pendingFiles.map(file => {
				const {id, name, progress} = file

				return <li key={id}>
					<label>{name}</label>
					<progress value={progress} max="100">{progress}%</progress>
				</li>
			})}
		</ul>



		<h1 className="header">Progress bars</h1>
		<progress value="33" max="100">
		</progress>




		<h2>Completed</h2>
		<ul>
			{completedFiles.map(file => {
				const {id, name, url, error} = file

				return <li key={id}>
					<label>{name}</label>
					{!error && <img src={url} style={{maxWidth: `200px`}} />}
					{!!error && <p className="failure">{error}</p>}
				</li>
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

	<h1 className="headerName">File inputs</h1>
		<form action="#" className="file-form">
			<input type="file" id="uploader" className="uploader uploader-input" data-multiple-caption="{count} files selected" multiple >
			<label tabindex="0" for="uploader" className="uploader"><span></span><strong>Upload Files</strong></label>
		</form>


export default Uploads
