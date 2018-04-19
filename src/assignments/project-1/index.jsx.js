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

	return <div>
		<nav>
		  <ul>
		    <li><a href="javascript:void(0)" onClick={() => this.setState({page: 'gallery'})}>Gallery</a></li>
		    <li><a href="javascript:void(0)" onClick={() => this.setState({page: 'faqs'})}>FAQs</a></li>
		  </ul>
		</nav>
		{page === 'gallery' && <div className="gallery-page">
			<p>Hi im a nice gallery</p>
		</div>
		}
		{page === 'faqs' && <div className="faq-page">
			<p>Hi im an FAQs page</p>
		</div>
		}

		<h1>Upload Images</h1>
		{/* do not delete this uploader component */}
		<Uploader upload={actions.upload} />
		{/* do not delete this uploader component */}

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

		<h2>Completed</h2>
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
	</div>/* end of outer div */
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
