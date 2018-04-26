import React from 'react'
import PropTypes from 'prop-types'

import { status as statusPropType, file as filePropType } from './scripts/schemas'

import Uploader from '../../ui/components/uploader.jsx'
import FileCardList from './scripts/components/FileCardList.jsx.js'

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div className="App mountable component">
		<h1>The Hunt Is On</h1>
    <header className="subHead mast">Share FOTOS of where you found your eggs!</header>
  
    <section className="content upload">
  
      <section className="upload-input">
        {/* TODO - get FE team to add this label to the uploader */}
        <label tabIndex="0" htmlFor="upload-1" className="uploader" onClick={clickUpload}>Upload Files		</label>
        {/* do not delete this uploader component */}
        <Uploader upload={actions.upload} />
        {/* do not delete this uploader component */}      
      </section>

      <ProgressSection pendingFiles={pendingFiles} />
      
      <section className="completed">
        <h2>Completed</h2>
        <FileCardList cards={completedFiles} />
      </section>
    </section>
	</div>
}

Uploads.propTypes = {
	uploads: PropTypes.shape({
		files: PropTypes.arrayOf(filePropType).isRequired,
		update: statusPropType.isRequired,
		delete: statusPropType.isRequired,
		share: statusPropType.isRequired,
	}).isRequired,
	actions: PropTypes.object.isRequired,
}

export default Uploads

// project-1

/** Progress Section component */
const ProgressSection = ({pendingFiles}) => {
  if(pendingFiles.length) {
    return <section className="progress">
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
</section>
  } else {
    return null
  }
}

/** clickUpload (event) => triggers a click on the corresponding input for a given input label, following the implementation spec:
    <label for="unique input label" onclick="clickUpload">Unique Input</label>
    <input type="file" ...>

    TODO - find out how to do this with refs, given we can't change the component
    TODO - ask FE team to implement the label
 */
const clickUpload = (e) => {
  let selector = e.target.getAttribute('for')
  document.querySelector(`[for="${selector}"] + input[type="file"]`).click()
}
