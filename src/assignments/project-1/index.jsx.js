import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <main>
		<header>This is header</header>
		<article>This is article</article>
		<section>
			<div>
				<h1>Upload Images</h1>
				{/* do not delete this uploader component */}
				<Uploader upload={actions.upload} />
				{/* do not delete this uploader component */}
			</div>
			<div>
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
			</div>
			<div>
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
		</section>
		<aside>This is aside</aside>
		<footer>This is footer</footer>
	</main>
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
