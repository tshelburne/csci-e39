import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import autobind from 'class-autobind'

import Lightbox from 'react-image-lightbox';

import Photo from './components/photo.jsx'
import InProgress from './components/inprogress.jsx'

function getMapValue(obj, key) {
   if (obj.hasOwnProperty(key))
      return obj[key];
   throw new Error("Invalid map key.");
}

class Uploads extends React.Component {
	constructor() {
		super(...arguments)
		autobind(this)

		this.state = {
      photoIndex: 0,
      isOpen: false,
    };
	}

	render() {
		const {uploads, actions} = this.props
		const {photoIndex, isOpen} = this.state

		const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
		const completedFiles = uploads.files.filter(({progress}) => !progress)

		return <div>
			<h1>Upload Images</h1>
      <p>Welcome to my image uploader. This uploader collects your images into
      a cute little album with Lightbox abilities. Have fun exploring!</p>
			{/* do not delete this uploader component */}
			<Uploader className="uploader" upload={actions.upload} />
			{/* do not delete this uploader component */}

			<h2>In Progress</h2>
			<List>
				{pendingFiles.map(file => {
					const {id, name, progress} = file

					return <InProgress key={id} name={name} progress={progress} />
				})}
			</List>

			<h2>Completed</h2>
			<List className="photo-album">
				{completedFiles.map(file => {
					const {id, name, url, error} = file

					return <Photo key={id}
						className="photo"
						error={error}
						name={name}
						fileId={id}
						url={url}
						onClick={() => this.setState({ isOpen: true })} />
				})}
			</List>

			{isOpen && (
          <Lightbox
            mainSrc={completedFiles[photoIndex].url}
            nextSrc={completedFiles[(photoIndex + 1) % completedFiles.length].url}
            prevSrc={completedFiles[(photoIndex + completedFiles.length - 1) % completedFiles.length].url}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + completedFiles.length - 1) % completedFiles.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % completedFiles.length,
              })
            }
          />
        )}
		</div>
	}
}

const List = ({children, ...props}) => {
	return <ul {...props}>
		{React.Children.map(children, child => <li>{child}</li>)}
		</ul>
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
