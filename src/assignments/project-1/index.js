import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import PhotoCard from './components/photocard'
import './app.scss' 

const Uploads = ({ uploads, actions }) => {
	const pendingFiles = uploads.files.filter(({ progress }) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({ progress }) => !progress)

	return  	<div className="wrapper">
			<Header imgSrc="https://www.stevensegallery.com/284/196"  text="Famous People Play PickleBall"  />
			<Nav />
			<article className="content">
				<h1>Pickleball is Now for Movie Stars</h1>
				<p>Pickle ball which has its origins in the tennis ball court has found its place among a new array of sports communities as well as prior tennis pros.
					Now you can catch your favorite actors taking a swipe at the famed wiffle balls. Below is a photo album where you can upload your favorites Photos of stars playing their new favorite pastime.
			</p>
				<div className="container">
					<h1 className="header">Upload Images</h1>
					{/* do not delete this uploader component */}
					<Uploader id="uploader" upload={actions.upload} /> 
					{/* do not delete this uploader component */}
			 <p></p>
				 
					<h4 className="header">In Progress</h4>
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
					<ul className="photo-ul"> 
						{completedFiles.map(file => {
							const { id, name, url, error } = file 
							return <li key={id} className="photo-li"> 
								{!error && <PhotoCard image={url} title={add3Dots(name,20)} style={{ maxWidth: `200px` }}  />} 
								{!!error && <p className="failure">{error}</p>} 
							</li> 
						})}
					</ul>
				</div>
			</article>
			<Footer />
		</div> 
}
function getComponent(children, type) {
	return React.Children.toArray(children).find((child) => child.type === type)
} 
const Header = ({ imgSrc, text, children }) => ( 
	<header className="main-head"><img className="header-photo" src={imgSrc} />{text}{children}</header>  
) 
const Content = ({ title, children }) => (
	<main className="main-content"> 
		{title && <h1 className="heading">{title}</h1>}
		{children}
	</main>
) 
function add3Dots(string, limit)
{
  var dots = "...";
  if(string.length > limit)
  { 
    string = string.substring(0,limit) + dots;
  }

    return string;
}
const Nav = ({ children }) => (
 	<aside className="main-nav">
				<ul>
					<li><a href="">Photo Upload</a></li>
					<li><a href="">FAQ</a></li>
				</ul>
			</aside> 
) 
const Footer = () => (
	<footer className="main-footer">Images are copyrighted by the original owner. </footer>
)
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