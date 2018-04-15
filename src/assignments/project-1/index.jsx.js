import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import ProgressBar from '../../ui/components/progressBar.jsx'
import PhotoAlbum from '../../ui/components/photoAlbum.jsx'
import Gallery from '../../ui/components/gallery.jsx'

class Uploads extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  gotoPrevious(){
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  onClose(){
    this.setState({
      lightboxIsOpen:false
    });
  }
  onPhotoClick(index){
    this.setState({
      lightboxIsOpen:true,
      currentImage: index
    });
  }
  render() {
    const {uploads, actions} = this.props
    const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
    const completedFiles = uploads.files.filter(({progress}) => !progress)
    const imageSources = completedFiles.map(file => ({ src: file.url }))

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
        <PhotoAlbum 
          completedFiles={completedFiles}
          onPhotoClick={this.onPhotoClick.bind(this)}
        />
      </section>
      <Gallery 
        lightboxIsOpen={this.state.lightboxIsOpen}
        onClose={this.onClose.bind(this)}
        imageSources={imageSources}
        gotoNext={this.gotoNext.bind(this)}
        gotoPrevious={this.gotoPrevious.bind(this)}
        currentImage={this.state.currentImage}
      />
    </main>
  }
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
