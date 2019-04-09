import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import './app.scss'

// Main greeting
const Greeting = (props) => {
	return <div>
					<h1>{props.greeting}, {props.name}</h1>
				</div>
}

// Footer
const Footer = (props) => {
	return <a href={props.gitHubRepo}>{props.footerText}</a>
}

// Side picture
const PictureCard = (props) => {
	return <div className="picture-card" key={props.key}>
					<label>{props.name}</label>
					<img className="thumbnail" src={props.url}/>
					<p>{props.error}</p>
				</div>
}

// Main picture
const MainCard = (props) => {
	return <div className="main-card" key={props.key}>
					<img className="thumbnail" src={props.url}/>
					<p>File name: {props.name}</p>
					<p>{props.error}</p>
					<p>URL: {props.url}</p>
					<p>Description: {props.description}</p>
					<p>Updated at: {props.updatedAt}</p>
				</div>
}

const Uploads = ({uploads, actions}) => {

	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress )
	const latestFiles = uploads.files.filter(({id}) => id > completedFiles.length - 3)

return <div className='main-container'>
				<Greeting greeting="hello" name="Matt" />

					<div className="upload-box">
							<h2>Upload Images</h2>
							<Uploader className="upload-button" upload={actions.upload} />
							{pendingFiles.map(file => {
								const {id, name, progress} = file
								return <h2>Upload Progress</h2>
								return <div key={id}>
									<label>{name}</label>
									<progress className="progress-bar" value={progress} max="100"></progress>
								</div>
							})}
					</div>

				<div className="grid-container">
					<div className="grid-sidebar">
						<h3>Completed Uploads ({completedFiles.length})</h3>
						{completedFiles.map(file => {
							const {id, name, url, error} = file
							return <div>
	 										<PictureCard key={file.id} name={file.name} error={file.error} url={file.url} />
									 	</div>
							})}
					</div>

					<div className="grid-main">
						<h2>Latest Uploads</h2>
						{latestFiles.map(file => {
							const {id, name, url, error, description, updatedAt} = file
							return <div>
											<MainCard key={file.id} name={file.name} error={file.error} url={file.url} description={file.description} updatedAt={file.updatedAt} />
										</div>
						})}
					</div>
				</div>

				<footer>
					<Footer gitHubRepo="https://github.com/dmbartles/csci-e39" footerText="Click here for Github Repo" />
				</footer>

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
