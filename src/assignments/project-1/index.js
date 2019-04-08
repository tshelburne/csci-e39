import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'

import './app.scss'

/* COMPONENTS */


function Photo(props) {

  return 		<li className="photo-and-label" key={props.id}>
						<figure>
							<figcaption className="filename">{props.name}</figcaption>
							{!props.error && <img src={props.url} style={{maxWidth: `200px`}} className="photo" />}
							{!!props.error && <p className="failure">{error}</p>}
						</figure>						
					</li>;
}

function Footer(props) {

  return 		<footer className="footer">
					<h2>{props.footerText}</h2>
				</footer>;
}


const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)

	return <div className="example-container">
	    
		<header className="hero">
			<h1>Birthday Album</h1>
				<p> Welcome to my birthday party album.  This is me with my wife, Natasha, and our two
					children, Zayden and Violet.  We went to <a href="https://www.nickandtonis.com/">Nick and Toni's </a>
					restaurant in East Hampton.
					Dinner was good enough but the Tartufo desert was to die for--best we have ever eaten.
					Next time, we will skip dinner and just eat tartufo!
				</p>
		</header>
	  	
		<section className="uploader-section">
			{/* do not delete this uploader component */}
			<button className="uploader-container">
				Upload a Photo to the Album
				<Uploader className="uploader-input" upload={actions.upload} />
			</button>
			{/* do not delete this uploader component */}
	
			<h2>In Progress</h2>
			<ul>
				{pendingFiles.map(file => {
					const {id, name, progress} = file
	
					return <li key={id}>
						<label>{name}</label>
						<progress value={progress} value = "33" max="100">{progress}%</progress>
					</li>
				})}
			</ul>
	
			<h2>Completed</h2>
	    </section>
	   
		<section className="photos"> 
			<ul className="photo-grid">
				{completedFiles.map(file => {
					const {id, name, url, error} = file
	
					return <Photo id={id} name={name} url={url} error={error}/>
				})}
			</ul>
		</section>
		
		<Footer  footerText="Goodbye and see you next birthday!"/>
		
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
