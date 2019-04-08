import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader' 
import './app.scss' 
 

const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div  >
		<div className="wrapper">
        <header className="main-head"><img src='https://www.stevensegallery.com/284/196'/> TOUGH GUYS PLAY PICKLEBALL</header>
        <nav className="main-nav">
            <ul>
                <li><a href="">Photo Upload</a></li>
                <li><a href="">FAQ</a></li> 
            </ul>
        </nav>
        <article className="content">
            <h1>Pickleball is Now for Action Movie Stars</h1>
            <p>Pickle ball which has its origins in the tennis ball court has found its place among a new array of sports communities as well as prior tennis pros.
				Now you can catch your favorite action star actors taking a swipe at the famed wiffle balls. Below is a photo album where you can upload your favorites Photos of famous action movie stars playing their new favorite pastime.
			</p>
			<div className="container">
		<h1 className="header">Upload Images</h1>
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}
		</div>
		<div className="container">
		<h2 className="header">In Progress</h2>
		<ul>
			{pendingFiles.map(file => {
				const {id, name, progress} = file

				return <li key={id}>
					<label>{name}</label>
					<progress value={progress} max="100">{progress}%</progress>
				</li>
			})}
		</ul>
		</div>
		<div className="container"> 
		<h2 className="header">Completed</h2>
		
		<ul className="photos">
		
			{completedFiles.map(file => {
				const {id, name, url, error} = file

				return  <li key={id} className="container">
					<label>{name}</label>
					 
					{!error && <img src={url} style={{maxWidth: `200px`}} />}
					{!!error && <p className="failure">{error}</p>}
				 
				</li>
				
			})}
		</ul>
		</div>
	    </article> 
        
        <footer className="main-footer">All images are copyrighted by the original uploader.</footer>
</div>

	</div>
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
