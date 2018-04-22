import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import List from './components/List.jsx'
import ImageItem from './components/ImageItem.jsx';
import UploadButton from './components/UploadButton.jsx';

class Uploads extends React.Component {
	state = {
		/* Keeps track of the current image */ 
		activeImage: 0,
		/* Keeps track of if the uploaded is visable or not */ 
		uploaderActive: false,
	}

	toggleUploader() {
		this.setState( {uploaderActive: !this.state.uploaderActive} )
	}

	render() {
		const {uploads, actions} = this.props
		const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
		const completedFiles = uploads.files.filter(({progress}) => !progress)
		const buttonText = this.state.uploaderActive ? 'Toggle Navigation Off' : 	'Toggle Navigation On';
		const {activeImage, uploaderActive} = this.state
		
		return (
			<div className="gridContainer">
				<header className="mainHeader grid" role="banner">
					<h1>CSCI E-30 Project 1 Image Viewer</h1>
				</header>
				<nav className="mainNavigation" role="navigation">
					Navigation Here - TDB
				</nav>
				<main className="mainContent" role="main">
					{uploads.files[activeImage] &&
						<div>
							<img className="large" src={uploads.files[activeImage].url} />
							<p>Image: {uploads.files[activeImage].name}</p>
						</div>
					}
				</main>
				<UploadButton pendingFiles={pendingFiles} active={uploaderActive} onClick={this.toggleUploader.bind(this)} actions={actions}/>
				<aside className="thumbnails" role="complementary">
					<h2>Thumbnails</h2>
					<List>
					{completedFiles.map((file, index) =>
						<ImageItem
							key={file.id}
 						    id
						    file={file}
						    title="FooBar"
						    onClick = {() => this.setState({activeImage: index})}
						/>
					)}
					</List>
				</aside>
				<footer className="mainFooter" role="contentinfo">
					Footer Content
				</footer>
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
