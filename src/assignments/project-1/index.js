import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader'
import ProgressBar from '../../ui/components/progressbar'
import PhotoGallery from '../../ui/components/photoGallery'
import Album from '../../ui/components/album'
import autobind from 'class-autobind'

import './app.scss'

class Uploads extends React.Component{

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {
			selectedImageIds : [],
			selectImageBool: false,
			albumIds: [],
			showAlbum: false
		};
	}


	handleClick(imageId){
		 var imageSelected = !this.state.selectImageBool;
		 this.setState({selectImageBool: imageSelected});
		 if(imageSelected){
		 	var updatedSelectedImageIds = this.state.selectedImageIds.concat(imageId);
		 	this.setState({selectedImageIds: updatedSelectedImageIds});
		 }
		 else{
		 	var updatedSelectedImageIds = this.state.selectedImageIds.filter(id => id !== imageId);
		 	this.setState({selectedImageIds: updatedSelectedImageIds});
		 }
	}

	updateSelectedIds(albumImageIds, isSelected){
	if(isSelected){
			this.setState({showAlbum: true});
			this.setState({albumIds: albumImageIds});
		}
		else {
			this.setState({showAlbum: false});
			this.setState({albumIds: []})
		}
		this.setState({selectedImageIds: []});
	}

  render(){
		const {uploads, actions} = this.props
			const pendingFiles = uploads.files.filter(({progress}) => progress && progress <= 100)
			const completedFiles = uploads.files.filter(({progress}) => !progress)
			return <div class="wrapper">
			  <header class="header">
				<h1> Nirvana Yoga Gallery </h1>
				<article>
				<figure class="image-container">
					<img src="http://www.mybodyharmony.com/wp-content/uploads/2012/02/PJois.png" alt="guruji"></img>
					<figcaption>Guruji</figcaption>
			  </figure>
				<p> Welcome to the Ashtanga Yoga Photo Gallery. Here you can upload Ashtanga pictures by clicking on Upload Images. You can also create Albums. Albums are immutable, meaning if you created them without any pictures
				they will remain so. To create album with pictures, select pictures from the gallery by clicking the picture
				and then click create album. You can then name the albums and save. Your album will be listed below Create Albums.
				You can then view pictures of a Album by clicking/selecting the album. To go back to all pictures, simply click on the album again.</p>
        <p><em class="text-color-emphasis"> Enjoy ! </em></p> 
				</article>
				</header>
				<nav class="nav">
			  {/* do not delete this uploader component */}
				<Uploader upload={actions.upload} />
		  	<Album selectImageIds={this.state.selectedImageIds} onAlbumSelect={this.updateSelectedIds.bind(this)}/>
				</nav>
		    <article class="content">
					<ProgressBar inProgress={pendingFiles}/>
					<PhotoGallery
					completedFiles={completedFiles}
					selectImageIds={this.state.selectedImageIds}
					selectImage={this.handleClick.bind(this)}
					showAlbum={this.state.showAlbum}
					albumIds={this.state.albumIds}
					/>
				</article>

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
