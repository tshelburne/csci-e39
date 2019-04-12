import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Uploader from '../../ui/components/uploader'
import SectionHeader from './sectionheader'
import Updater from './updater'
import Album from './album'
import AlbumDescription from './albumdescription'

class AlbumPage extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {actions, pendingFiles, completedFiles, ...inputProps} = this.props
		return <>
			<SectionHeader tag="h1" sectiontext="My Project 1 Album"/>
			<AlbumDescription paragraphs={[FIRSTPARAGRAPH, SECONDPARAGRAPH]} />
			<SectionHeader tag="h1" sectiontext="Upload Images"/>
			{/* do not delete this uploader component */}
			<Uploader className="file-form" upload={actions.upload} />
			{/* do not delete this uploader component */}

			{/* Display PendingFiles Header and List */}
			<SectionHeader tag="h2" sectiontext="In Progress"/>
			<Album isPendingFiles={true} photos={pendingFiles} updateFile={actions.files.updateFile}/>

			{/* Display CompletedFiles Header and List */}
			<SectionHeader tag="h2" sectiontext="Completed"/>
			<Album isPendingFiles={false} photos={completedFiles} updateFile={actions.files.updateFile}/>
		</>
	}

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

export default AlbumPage