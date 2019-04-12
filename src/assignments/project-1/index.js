import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import SectionHeader from './sectionheader'
import Updater from './updater'
import AlbumDescription from './albumdescription'

import './app.scss'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div>
		{/* Link in Desired Font Families */}
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Roboto"/>

		<SectionHeader tag="h1" sectiontext="My Project 1 Album"/>
		<AlbumDescription paragraphs={[FIRSTPARAGRAPH, SECONDPARAGRAPH]} />
		<SectionHeader tag="h1" sectiontext="Upload Images"/>
		{/* do not delete this uploader component */}
		<Uploader className="file-form" upload={actions.upload} />
		{/* do not delete this uploader component */}

		<SectionHeader tag="h2" sectiontext="In Progress"/>
		<ul className = "grid-container">
			{pendingFiles.map(file => {
				const {id, name, progress} = file

				return <li className = "card" key={id}>
					<label className = "card-title">{name}</label>
					<progress value={progress} max="100">{progress}%</progress>
				</li>
			})}
		</ul>

		<SectionHeader tag="h2" sectiontext="Completed"/>
		<ul className = "grid-container">
			{completedFiles.map(file => {
				const {id, name, url, description, error} = file
				return <li className = "card" key={id}>
					<label className = "card-title">{name}</label>
					{!error && <img className = "card-img" src={url} alt={description} />}
					{!error && <Updater className="form-input" formvalue={description} file={file} updateFile={actions.files.updateFile}/>}
					{!!error && <p className="failure">{error}</p>}
				</li>
			})}
		</ul>
	</div>
}

const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
	message: PropTypes.string,
})

Uploads.propTypes = {
	uploads: PropTypes.shape({
		files: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
			name: PropTypes.string.isRequired,
			progress: PropTypes.number,
			url: PropTypes.string,
			description: PropTypes.string,
			error: PropTypes.string,
		})).isRequired,
		update: statusPropType.isRequired,
		delete: statusPropType.isRequired,
		share: statusPropType.isRequired,
	}).isRequired,
	actions: PropTypes.object.isRequired,
}


const FIRSTPARAGRAPH = {
	header: "This is my content header...",
	header_class: "content_header",
	text: "This album is my first attempt at using Reactjs. As you will probably see, I still need lots of help with React. I will attempt to pass this paragraph data from many items into the uploader index file. I will also pass in some simple class information into the react component.",
	text_class: "paragraph_text",
}

const SECONDPARAGRAPH = {
	header: "This is the second header content...",
	header_class: "content_header",
	text: "This is the second paragraph that I am attempting to write. The images that I am using for this shown below are randomly found on my local computer so they might not make any sense.",
	text_class: "paragraph_text",
}

export default Uploads
