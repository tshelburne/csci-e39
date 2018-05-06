import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'

const PendingFiles = ({files}) => {
	return <section id="processing">
    <h2>In Progress</h2>
    <ul>
      {files.map(file => {
        const {id, name, progress} = file

        return <li key={id}>
          <label>{name}</label>
          <progress value={progress} max="100">{progress}%</progress>
        </li>
      })}
    </ul>
  </section>
}

PendingFiles.propTypes = {
	files: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
		name: PropTypes.string.isRequired,
		progress: PropTypes.number,
		url: PropTypes.string,
		error: PropTypes.string,
	})).isRequired
}

export default PendingFiles
