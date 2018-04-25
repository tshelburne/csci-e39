import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../ui/components/button.jsx'
import Uploader from '../../ui/components/uploader.jsx'
import Lightbox from 'react-image-lightbox'


class Uploads extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			page: `home`,
			photoIndex: 0,
			isOpen: false,
		}
	}


	render(){
		const {uploads, actions} = this.props
		const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
		const completedFiles = uploads.files.filter(({progress}) => !progress)

		const {page, photoIndex, isOpen} = this.state;
		const imageList = [];

		return <div className="body">
			<header>
				<nav>
					<ul>
						<li><a href="javascript:void(0)" onClick={() => this.setState({page: `home`})}>Home</a></li>
						<li><a href="javascript:void(0)" onClick={() => this.setState({page: `gallery`})}>Gallery</a></li>
					</ul>

				</nav>
			</header>
			
			

			{page === `home` && <div className="wrapper home-page">

					<Button />

					<main className="container file-input-container">
						{/* do not delete this uploader component */}
						<Uploader upload={actions.upload} />
						{/* do not delete this uploader component */}
						
						
						<div className="container bar-container">
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
					

					<div className="container image-container">
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

				</main>
			</div> //end of Home wrapper
			} {/*end of home page*/}




			{page === `gallery` && <div className="wrapper gallery-page">
				<main className="container image-container">
									
				{/*populate imageList array*/}
				{completedFiles.map(file => {
					const {id, name, url, error} = file

					//push images to imageList array
					imageList.push(file);

				})}


			{/*render Lightbox when isOpen state is true*/}
				{isOpen &&
					<Lightbox mainSrc = {imageList[photoIndex].url} 
						nextSrc= {imageList[(photoIndex + 1) % imageList.length].url} 
						prevSrc={imageList[(photoIndex + imageList.length - 1) % imageList.length].url}
						onCloseRequest={() => this.setState({ isOpen: false })}

						onMovePrevRequest={() => this.setState({
			                photoIndex: (photoIndex + imageList.length - 1) % imageList.length, })} 

						onMoveNextRequest={() => this.setState({
			                photoIndex: (photoIndex + 1) % imageList.length,})}

			            imageCaption =  {imageList[photoIndex].name}
					/> 
				}


			{/*render images from completedFiles and add onclick handler to each image to be able to open Lightbox gallery*/}
					
						{completedFiles.map((file, i) => {
							const {id, name, url, error} = file

							return  <div className="galleryGrid">
										<div>
											<img src={url} style={{maxWidth: `200px`, cursor: `pointer`}} 
										 		 onClick={() => this.setState({ isOpen: true, photoIndex: i})}/>
											<p>{name}</p>
										</div>
									</div>
						})}					
			 	</main> 
			</div> // wrapper gallery page			
			} {/*end of gallery page*/}



			<footer><p>React 2018</p></footer>

		</div> //end of .body
	} // end of render
	
} // end of component

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
