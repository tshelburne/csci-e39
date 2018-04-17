import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'

const Uploads = ({uploads, actions}) =>
	<div>
		<h1>Upload Images</h1>
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}

		<h2>In Progress</h2>
		<ul>
			{uploads.filter(({progress}) => progress < 100).map(file => {
				const {id, name, progress} = file

				return <li key={id}>
					<label>{name}</label>
					<progress value={progress} max="100">{progress}%</progress>
				</li>
			})}
		</ul>

		<h2>Completed</h2>
		<ul>
			{uploads.filter(({progress}) => progress === 100).map(file => {
				const {id, name, url, error} = file

				return <li key={id}>
					<label>{name}</label>
					{!error && <img src={url} style={{maxWidth: `200px`}} />}
					{!!error && <p className="failure">{error}</p>}
				</li>
			})}
		</ul>
	</div>

Uploads.propTypes = {
	uploads: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		progress: PropTypes.number.isRequired,
		url: PropTypes.string,
		error: PropTypes.string,
	})).isRequired,
	actions: PropTypes.object.isRequired,
}

export default Uploads
