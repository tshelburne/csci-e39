import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'

const FileList = ({title, files, eventHandler}) => {
	return (
		<div>
			<h2>{title}</h2>
			<ul>
				{files.map(file => {
					if (title.toLowerCase() == 'completed') {
						return (<FileItem file={file} eventHandler={eventHandler}/>)
					} else {
						return (<UploadItem file={file}/>)
					}			
				})}
			</ul>
		</div>
	)
}

const UploadItem = ({file}) => {
	const {id, name, progress} = file;

	return (
		<li key={id}>
			<label>{name}</label>
			<progress value={progress} max="100">{progress}%</progress>
		</li>
	)
}

const FileItem = ({file, eventHandler}) => {
	const {id, name, url, error} = file;

	let selName, 
		selUrl;

	const handleClick = (e) => {
		e.preventDefault();
	//	eventHandler(selName.value);
		alert('Got click and name is: '+selName.value);
		// render component here
	}

	return (
		<li key={id}>
			<figure>
				{!error && <img src={url} alt={name} style={{maxWidth: `100%`}} />}
				{!error && <figcaption>{name}</figcaption>}
				{!!error && <p className="failure">{error}</p>}
				{!error && (
					<form onSubmit={handleClick}>
						<input type="hidden" ref={input => selName = input} value={name}/>
						<input type="hidden" ref={input => selUrl = input} value={url}/>
						<button>Enlarge</button>
					</form>)
				}
			</figure>
		</li>
	)
}

class Uploads extends React.Component {

	constructor(props) {
		super(props);
	}
/*
	eventHandler = (name) => {
		alert('I got a name: '+name);
	}
*/
	render () {
		const {uploads, actions} = this.props;

		const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
		const completedFiles = uploads.files.filter(({progress}) => !progress)

		return (
			<div className="wrapper">
				<header className="box">
					<h1>Upload Images</h1>
				</header>
				<main className="box">
					{/* do not delete this uploader component */}
					<Uploader upload={actions.upload} />
					{/* do not delete this uploader component */}

					<FileList title="In Progress" files={pendingFiles} />
				</main>

				<aside className="box">
					<FileList title="Completed" files={completedFiles} />
				</aside>
			</div>)
	}

/*
	const statusPropType = PropTypes.shape({
		status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
		message: PropTypes.string.isRequired,
	})

	propTypes = {
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
 */
 
}

export default Uploads
