import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../src/ui/components/uploader.jsx'

const Uploads = ({uploads, actions}) =>
	<div>
		<h1>Upload Images</h1>
		<Uploader upload={actions.upload} />

		<h2>In Progress</h2>
		<ul>
			{Object.keys(uploads).filter(id => uploads[id].progress < 100).map(id => {
				const {name, progress} = uploads[id]

				return <li key={id}>
					<label>{name}</label>
					<progress value={progress} max="100">{progress}%</progress>
				</li>
			})}
		</ul>

		<h2>Completed</h2>
		<ul>
			{Object.keys(uploads).filter(id => uploads[id].progress === 100).map(id => {
				const {name, url, error} = uploads[id]

				return <li key={id}>
					<label>{name}</label>
					{!error && <img src={url} style={{maxWidth: `200px`}} />}
					{!!error && <p className="failure">{error}</p>}
				</li>
			})}
		</ul>
	</div>

Uploads.propTypes = {
	uploads: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
}

export default Uploads
