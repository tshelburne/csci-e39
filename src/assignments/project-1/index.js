import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'

import './app.scss'


const Greeting = (props) => {
	return <h1>{props.greeting} {props.name}</h1>
	}

	const Footer = (props) => {
		return <a href={props.gitHubRepo}>{props.footerText}</a>
		}




const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress )
	const selectedFiles = uploads.files.filter(({progress}) => !progress && userselect)

console.log(completedFiles)
console.log({selectedFiles})

return <div className='main-container'>
				<Greeting greeting="hello" name="Matt" />

					<div className="upload-box">
							<h2>Upload Images</h2>
							<Uploader className="upload-button" upload={actions.upload} />
							<progress className="progress-bar" value={pendingFiles.progress} max="100"></progress>
					</div>
				<div className="grid-container">
					<div className="grid-sidebar">

						{pendingFiles.map(file => {
							const {id, name, progress} = file
							return <h2>Upload Progress</h2>
							return <div key={id}>
								<label>{name}</label>
								<progress value={progress} max="100">{progress}%</progress>
							</div>
						})}

					<h2>Completed Uploads ({completedFiles.length})</h2>
						{completedFiles.map(file => {
							const {id, name, url, error} = file
							return <div className="picture-card" key={id}>
								<label>File name: {name}</label>
								{!error && <img className="thumbnail" src={url}/>}
								{!!error && <p className="failure">{error}</p>}
							</div>
						})}
					</div>

					<main className="grid-main">
					</main>



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
				userselect: PropTypes.number
			})).isRequired,
			update: statusPropType.isRequired,
			delete: statusPropType.isRequired,
			share: statusPropType.isRequired,
		}).isRequired,
		actions: PropTypes.object.isRequired,
	}

export default Uploads
