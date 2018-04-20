import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'

class Uploads extends React.Component {
 
 	constructor(props) {
 		super(props)
 		this.state = {
 			page: 'gallery',
 		}
 	}
 	//any functions here

  	render() {
 		const {page} = this.state
 		const {uploads, actions} = this.props 
		const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
		const completedFiles = uploads.files.filter(({progress}) => !progress)
		const faqlist = [
			{ question: "Why is the sky blue?",
			  answer: "Because it is pretty.",
			},
			{ question: "Why did the chicken cross the road?",
			  answer: "To get to the other side.",
			},	
		]

	return <div id="outer-wrapper">
		<h1>Picture Gallery</h1>
		<nav>
		  <ul>
		    <li><a href="javascript:void(0)" onClick={() => this.setState({page: 'gallery'})}>Gallery</a></li>
		    <li><a href="javascript:void(0)" onClick={() => this.setState({page: 'upload'})}>Upload</a></li>
		    <li><a href="javascript:void(0)" onClick={() => this.setState({page: 'faqs'})}>FAQs</a></li>
		  </ul>
		</nav>

		<section id="welcome">
			<h2>Welcome to my gallery</h2>
			<p>Here are some of my four-legged friends and their friends. Please add yours!</p>	
		</section>

		<div className="elastic-spacer-top" ></div>

		{page === 'gallery' && <div id="gallery-page">
			<ul>
				{completedFiles.map(file => {
					const {id, name, url, error} = file

					return <li key={id}>
						<label>{name}</label>
						{!error && <img src={url} style={{maxWidth: `200px`}} />}
						{!!error && <p className="failure">{error}</p>}
					</li>				
				})}
			</ul>
		</div>
		}

		{page === 'upload' && <div id="uploads-page">
			<h1>Upload Images</h1>
			{/* do not delete this uploader component */}
			<Uploader upload={actions.upload} />

			<h2>In Progress</h2>
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
		}

		{page === 'faqs' && <section id="faq-page">
			<dl>
				{faqlist.map(faq => {

					return <div><dt>{faq.question}</dt>
					<dd>{faq.answer}</dd></div>
				})}
			</dl>
		</section>
		}

		<div className="elastic-spacer-bottom"></div>

		<footer>
		 	<hr />
		 	<p>By Luann Ebert for csci-e39. April 2018</p>
		</footer>

	</div>/* end of outer div required by react*/
	}/* end of render function */
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
