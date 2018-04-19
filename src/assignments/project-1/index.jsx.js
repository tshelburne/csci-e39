import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../ui/components/button.jsx'
import Uploader from '../../ui/components/uploader.jsx'
import WelcomeDialog from '../../ui/components/component1.jsx'
import Calculator from '../../ui/components/component2.jsx'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div className="wrapper">
		
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}
		
		
		<div className="example-container bar-container">
			<h2 className="header">In Progress</h2>
			<ul>
				{pendingFiles.map(file => {
					const {id, name, progress} = file

					return <li key={id}>
						<label>{name}</label>
						<progress value={progress} max="100">{progress}%</progress>
					</li>
				})}
			</ul>
		</div>

		<div className="example-container image-container">
			<h2>Completed</h2>
			<ul>
				{completedFiles.map(file => {
					const {id, name, url, error} = file

					return <li key={id}>
						<label className="compl-img-name">{name}</label>
						{!error && <img src={url} style={{maxWidth: `200px`}} />}
						{!!error && <p className="failure">{error}</p>}
					</li>
				})}
			</ul>
		</div>
		<Button />

		<WelcomeDialog />

		<Calculator />
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
