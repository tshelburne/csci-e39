import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import ProgressBar from '../../ui/components/progressBar.jsx'


const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <main>

    <section className="uploader-section">
      <h1>Upload Images</h1>
      <p>Upload some of your favorite photos and see them appear in a photo album below!</p>
      {/* do not delete this uploader component */}
      <Uploader upload={actions.upload} />
      {/* do not delete this uploader component */}
      <ProgressBar
        pendingFiles={pendingFiles}
      />
    </section>
    
    <section className="photo-album">
      <h1>Your Photos</h1>
      <ul className="photo-grid">
        {completedFiles.map(file => {
          const {id, name, url, error} = file

          return <li key={id}>
            {!error && <img src={url} />}
            {!!error && <p className="failure">{error}</p>}
            <label>{name}</label>
          </li>
        })}
      </ul>
    </section>
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
