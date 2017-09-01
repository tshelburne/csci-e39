import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../components/uploader.jsx'

const Uploads = ({uploads, actions}) =>
	<div>
		<h1>Upload Images</h1>
		<Uploader upload={actions.upload} />

		<h2>Upload Results</h2>
		<ul>
			{Object.keys(uploads).map(id => {
				const {name, progress, url, error} = uploads[id]

				return <li key={id}>
					<label>{name}</label>
					<progress className={!error ? `success` : `failure`} value={progress} max="100">{progress}%</progress>
					{progress === 100 && <img src={url} />}
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
