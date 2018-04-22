import React from 'react'
import PropTypes from 'prop-types'
import Carousel from './carousel.jsx'
import Uploader from '../../ui/components/uploader.jsx'
import Button from './button.jsx'
import ProgressBar from './progressbar.jsx'
import Gallery from './gallery.jsx'


const Uploads = ({uploads, actions}) => {
	const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
	const completedFiles = uploads.files.filter(({progress}) => !progress)


	return (
		<div className="container">

			<header className="carousel-component" role="banner">
				<Carousel />
			</header>

	      	<section className="uploader-component">
		      	<p className="content">Use the following image uploader to create a gallery. You can also follow along online for latest travel stories.</p>
			    <form action="#">
			           	<label tabIndex="0"  className="uploader">
			            	Upload
			            <Uploader upload={actions.upload}/>
			        </label>
			    </form>
				<Button cssclass="button-component" content="Follow" openThisSite={()=> {window.open('http://google.com','_blank')} } />
	     	</section>

			<section className="progressbar-component">
				<ProgressBar title="In Progress" pendingFiles={pendingFiles}/>
			</section>

			<main className="gallery-component" role="main">
				<Gallery title="Completed" completedFiles={completedFiles}/>
        	</main>

		</div>
	)
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
