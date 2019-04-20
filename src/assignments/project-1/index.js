import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'

import ImageGallery from './imagegallery.js'
import PendingUpload from './pendingupload.js'
import MyContent from './content.js'
// import Modal2 from './imagemodal';
import Modal from 'react-modal';

import './app.scss'
import './pendingupload.scss';
import './uploadbutton.scss';
import './imagegallery.scss';
import './imagecard.scss';
import './index.scss';
import './content.scss';

const customStyles = {
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)'
	}
};


// const Uploads = ({uploads, actions}) => {
class Uploads extends React.Component {

	constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

	render() {

		const pendingFiles = this.props.uploads.files.filter(({progress}) => progress && progress < 100)
		const completedFiles = this.props.uploads.files.filter(({progress}) => !progress)


		return (
			<div className="main-container">
			<h1 className="main title">Album Uploader</h1>
			{/* do not delete this uploader component */}
			<div className="uploader-container">
			<Uploader upload={this.props.actions.upload} />
			</div>
			{/* do not delete this uploader component */}

			<button onClick={this.handleOpenModal}>Trigger Modal</button>
			<Modal
				 isOpen={this.state.showModal}
				 contentLabel="Minimal Modal Example" ariaHideApp={false}
			>
				<button onClick={this.handleCloseModal}>Close Modal</button>
			</Modal>

			<h2 className="inprogress title">In Progress</h2>
			<PendingUpload uploaddata= {pendingFiles} />

			<MyContent />

			<h2 className="completed title">Gallery</h2>
			<div className="container-completed">
			<ImageGallery images= {completedFiles} ></ImageGallery>
			</div>
			</div>
		)


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
