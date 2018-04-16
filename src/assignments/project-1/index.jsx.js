import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import completedFilesList from './CompletedFilesList.jsx'
import CompletedFilesList from './CompletedFilesList.jsx';
import PendingFilesList from './PendingFilesList.jsx';

class Uploads extends React.Component {
	state = {
		sidebarActive: false,
	}

	toggleSidebar() {
		this.setState( {sidebarActive: !this.state.sidebarActive} )
		console.log(this.sidebarActive)
	}

	render() {
		const {uploads, actions} = this.props
		const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
		const completedFiles = uploads.files.filter(({progress}) => !progress)
		const buttonText = this.state.sidebarActive ? 'Toggle Sidebar Off' : 	'Toggle Sidebar On';
		const {sidebarActive} = this.state
		
		return (
		<div className="container">
	        <header className="mainHeader" role="banner">
				<h1>Image Viewer 2</h1>
			</header>
			<nav className="mainNavigation" role="navigation">
				<ul>
					<li>Upload</li>
					<li>FAQ</li>
				</ul>
	        </nav>
			<div className="grid-container">
			{sidebarActive && 
				<aside className="sidebar">
					<h2>Upload Image</h2>
					{/* do not delete this uploader component */}
					<Uploader upload={actions.upload} />
					{/* do not delete this uploader component */}
					<PendingFilesList title='In Progress' pendingFiles={pendingFiles} />
				</aside>
			}	
				<main className="main" role="main">
				<button className="nav-button" onClick={this.toggleSidebar.bind(this)}>{buttonText}</button>
				<CompletedFilesList title='Completed' completedFiles={completedFiles} />
				</main>
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
