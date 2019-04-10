import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import './app.scss'


const Uploads = ({ uploads, actions }) => {
	const pendingFiles = uploads.files.filter(({ progress }) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({ progress }) => !progress)

	return <div  >
		<div className="wrapper">
			<Header imgSrc="https://www.stevensegallery.com/284/196"  text="Tough Guys Play PickleBall"  />
			<Nav />
			<article className="content">
				<h1>Pickleball is Now for Action Movie Stars</h1>
				<p>Pickle ball which has its origins in the tennis ball court has found its place among a new array of sports communities as well as prior tennis pros.
					Now you can catch your favorite action star actors taking a swipe at the famed wiffle balls. Below is a photo album where you can upload your favorites Photos of famous action movie stars playing their new favorite pastime.
			</p>
				<div className="container">
					<h1 className="header">Upload Images</h1>
					{/* do not delete this uploader component */}
					<Uploader id="uploader" upload={actions.upload} /> 
					{/* do not delete this uploader component */}
				</div>
				<div className="container">
					<h2 className="header">In Progress</h2>
					<ul>
						{pendingFiles.map(file => {
							const { id, name, progress } = file

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
							const { id, name, url, error } = file

							return <li key={id} className="container"> 
{!error && <PhotoCard image={url} title={name} style={{ maxWidth: `200px` }}  />} 
								{!!error && <p className="failure">{error}</p>} 
							</li>

						})}
					</ul>
				</div>
			</article>
			<Footer />
		</div>

	</div>
}
function getComponent(children, type) {
	return React.Children.toArray(children).find((child) => child.type === type)
}
 
const TwoUpLayout = ({ children }) => (
	<div className="layout-two-up">
		{getComponent(children, Header)}
		{getComponent(children, Content)}
		{getComponent(children, Sidebar)}
		{getComponent(children, Footer)}
	</div>
)

const Header = ({ imgSrc, text, children }) => ( 
	<header className="main-head"><img src={imgSrc} />{text}{children}</header>  
)
const Content = ({ title, children }) => (
	<main className="main-content">

		{title && <h1 className="heading">{title}</h1>}
		{children}
	</main>
)

const Nav = ({ children }) => (
 	<aside className="main-nav">
				<ul>
					<li><a href="">Photo Upload</a></li>
					<li><a href="">FAQ</a></li>
				</ul>
			</aside>
	 
		
)

const Footer = ({ children }) => (
	<footer className="container">

		All images are copyrighted by the original uploader.
	{children}
	</footer>
)
const statusPropType = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
	message: PropTypes.string.isRequired,
})

// COMPONENTS 
const Img = ({ className, small, large, alt, style}) => (
	<picture className={className}>
		<source media="(max-width: 767px)" srcSet={small} />
		<source media="(min-width: 768px)" srcSet={large} />
		<img src={large} alt={alt} style={style} /> 
	</picture>
);
const PhotoCard = ({ image, title, style }) => ( 
		<div className="item-card">
			<Img className="item-card-image" small={image} large={image} style={style} alt={title} />
			<h2 className="item-card-title">{title}</h2>  
		</div> 
);


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
//export default TwoUpLayout