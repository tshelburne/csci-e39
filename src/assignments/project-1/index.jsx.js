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

		<div className="elastic-spacer-top" >&nbsp;</div>

		{page === 'gallery' && <section id="gallery-page">
			<h2>Welcome to my gallery</h2>
			<p>This is a place to display favorite images. Please add yours using the Upload link above!</p>	
			<div id="gallery-images">

				{completedFiles.map(file => {
					const {id, name, url, error} = file

					return <div>
						
						{!error && <img src={url} style={{maxWidth: `200px`}} />}
						{!!error && <p className="failure">{error}</p>}
					</div>			
				})}

			</div>
		</section>
		}

		{page === 'upload' && <section id="uploads-page">
			<h2>Upload Your Pics</h2>
			<p>The maximum file size is 500kb</p>
			<p>Once you have uploaded your images, go to the Gallery page to view.</p>
			{/* do not delete this uploader component */}
			<Uploader upload={actions.upload} />

			<ul>
				{pendingFiles.map(file => {
					const {id, name, progress} = file

					return <li key={id}>
						<label>{name}</label>
						<progress value={progress} max="100"></progress>
					</li>
				})}
			</ul>
		</section>
		}

		{page === 'faqs' && <section id="faq-page">
			<h2>Frequently Asked Questions</h2>
			<List>
				{faqlist.map(faq => {

					return <div><dt>{faq.question}</dt>
					<dd>{faq.answer}</dd></div>
				})}
			</List>
		</section>
		}

		<div className="elastic-spacer-bottom">&nbsp;</div>

		<Footer author="Luann Ebert" date="April 2018"/>


	</div>/* end of outer div required by react*/
	}/* end of render function */
}

const Footer = ( {author, date} ) => 
	<footer>
		 <hr />
		 <p>By {author} for csci-e39. {date}</p>
	</footer>

const List = ({children, ...props}) =>
	<dl {...props} >
	{React.Children.map(children, child => <div>{child}</div>)}
	</dl>	

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
