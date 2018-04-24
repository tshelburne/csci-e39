import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../ui/components/button.jsx'
import Uploader from '../../ui/components/uploader.jsx'
import NPWrapper from '../../ui/components/np-list.jsx'
import TemperatureInput from '../../ui/components/inputTemp.jsx'
import Lightbox from 'react-image-lightbox'


class Uploads extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			page: `home`,
			index: 0,
			isOpen: false,
		}
		
		this.openLightbox = this.openLightbox.bind(this);
		this.closeLightbox = this.closeLightbox.bind(this);
    	this.moveNext = this.moveNext.bind(this);
    	this.movePrev = this.movePrev.bind(this);
	}

	openLightbox() {
	    this.setState({ isOpen: true });
	  }


	closeLightbox() {
	    this.setState({ isOpen: false });
	  }

	  moveNext() {
	    this.setState({ index: (this.state.index + 1)});
	  }

	  movePrev() {
	    this.setState({
	      index: (this.state.index  - 1)
	    });
	  }

	render(){
		const {uploads, actions} = this.props
		const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
		const completedFiles = uploads.files.filter(({progress}) => !progress)


		

		const {page} = this.state

		return <div className="body">
			<header>
				<nav>
					<ul>
						<li><a href="javascript:void(0)" onClick={() => this.setState({page: `home`})}>Home</a></li>
						<li><a href="javascript:void(0)" onClick={() => this.setState({page: `gallery`})}>Gallery</a></li>
					</ul>

				</nav>
			</header>
			<main>

			{page === `home` && <div className="wrapper">
			
				{/* do not delete this uploader component */}
				<Uploader upload={actions.upload} />
				{/* do not delete this uploader component */}
				
				
				<div className="example-container bar-container">
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

				<div className="example-container image-container">
					<h2>Completed</h2>
					<ul>
						{completedFiles.map(file => {
							const {id, name, url, error} = file

							return <li key={id}>
							
								<label className="compl-img-name">{name}</label>
								{!error && <img src={url} style={{maxWidth: `200px`}} />}
								{!!error && <p className="failure">{error}</p>}
							</li>
						})}
					</ul>
					
				</div>
				<Button />
				<NPWrapper />
				<TemperatureInput />
				</div>
			}
			{page === `gallery` && <div className="example-container image-container">
					

					

					<h2>Completed</h2>
					
					<ul>
						
						{completedFiles.map((file,i) => {
							const {id, name, url, error} = file
							const images = []
							images.push(file)
							console.log(images[0])
	
							return <li key={id}>
							<Lightbox mainSrc = {images[0].url} 
							nextSrc= {file.url} prevSrc={file.url}
							onCloseRequest={this.closeLightbox}  
							onMovePrevRequest={this.movePrev} 
							onMoveNextRequest={this.moveNext}>
								<label className="compl-img-name">{name}</label>
								{!error && <img src={url} style={{maxWidth: `200px`}} />}
								{!!error && <p className="failure">{error}</p>}</Lightbox>


							</li>

							
							
						})}
					</ul>

					
				</div> }
			</main>

			<footer><p>@React 2018</p></footer>
		</div>
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
