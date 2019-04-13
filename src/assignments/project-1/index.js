import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import Banner from './banner'

import './app.scss'

const Uploads = ({uploads, actions}) => {
	
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)
	console.log('is array? ' + Array.isArray(completedFiles)); 

	return (
		<React.Fragment>
			
			<Banner className="banner" first={USER.name.firstName} last={USER.name.lastName} uname={USER.name.userName}/>
			
			<label className="uploader">{USER.name.userName}: Click here to upload more photos.
			{/* do not delete this uploader component */}
			<Uploader className="uploader-file-input" upload={actions.upload} />
			{/* do not delete this uploader component */}
			</label>

			{pendingFiles.length>0 && <h2>In Progress</h2>}
			
			<ul>
				{pendingFiles.map(file => {
					const {id, name, progress} = file

					return <li key={id}>
						<label>{name}</label>
						<progress value={progress} max="100">{progress}%</progress>
					</li>
				})}
			</ul>

			{completedFiles && <h2>Completed</h2>}

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
		</React.Fragment>
	)
}

const USER = {
	name: {
		firstName: 'Dave',
		lastName: 'Morgan',
		userName: 'dmorg'
	},
	about: ["opportunisitc photographer", "terminal cynic", "occasional cyclist", "inveterate nomad", "unrepentant geek", "lifetime learner", "long time rock-climber"]	
};




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
