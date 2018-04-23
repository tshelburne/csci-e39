import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import List from './components/List.jsx'
import UploadButton from './components/UploadButton.jsx'
import PendingFile from './components/PendingFile.jsx'
import CompletedFile from './components/CompletedFile.jsx'
import PhotoCard from './components/PhotoCard.jsx'
import Thumbnails from './components/Thumbnails.jsx'

class Uploads extends React.Component {
	state = {
		/* Keeps track of the current image */ 
		activeImage: 0,
		/* Keeps track of if the uploaded is visable or not */ 
		uploaderActive: false,
		/* Current page */
		currentPage: "home",
	}

	toggleUploader() {
		this.setState( {uploaderActive: !this.state.uploaderActive} )
	}

	render() {
		const {uploads, actions} = this.props
		const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
		const completedFiles = uploads.files.filter(({progress}) => !progress)
		const buttonText = this.state.uploaderActive ? 'Toggle Navigation Off' : 	'Toggle Navigation On';
		const {activeImage, uploaderActive, currentPage} = this.state
		
		return (
			<div className="grid-container">
				<header className="main-header">
					<h1 className="title">
						Harvard <span className="inlineHeaderStyle">CSCI-E39</span> React
					</h1>
					<h2 className="subheader">Project 1</h2>
				</header>

				<div className="uploader">
					<h2>Upload Image</h2>
					<Uploader upload={actions.upload} />
					<List>
						{pendingFiles.map((file, index) =>
							<PendingFile
								key={file.id}
								file={file}
							/>
						)}
					</List>
				</div>

				<Thumbnails className="thumbnails" completedFiles={completedFiles} />

				<main className="large-photo">
					{ currentPage=="faq" &&
						<p>FAQ HERE</p>
					}
					<p>
					This is a paragraph! What a piece of junk. She'll make point five beyond the speed of light. She may not look like much, but she's got it where it counts, kid. I've added some special modifications myself. We're a little rushed, so if you'll hurry aboard
					we'll get out of here. Hello, sir. Which way? All right, men. Load your weapons! Stop that ship! Blast 'em! Chewie, get us out of here! Oh, my. I'd forgotten how much I hate space travel. -
					</p>
					<p>
					This is another paragraph. Are you all right? What's wrong? I felt a great disturbance in the Force...as if millions of voices suddenly cried out in terror and were suddenly silenced. I fear something terrible has happened. You'd better get on with your
					exercises. Well, you can forget your troubles with those Imperial slugs. I told you I'd outrun 'em. Don't everyone thank me at once. Anyway, we should be at Alderaan about oh-two-hundred hours. Now be careful, Artoo. He made a fair move. Screaming
					about it won't help you. Let him have it. It's not wise to upset a Wookiee. But sir, nobody worries about upsetting a droid. That's 'cause droids don't pull people's arms out of their socket when they lose. -
					</p>
				</main>

				<footer className="footer">
					<p>This is the end of this page. Here's a related bunch of info: Some original trilogy Star Wars characters in no special order.</p>
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
