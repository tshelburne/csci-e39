import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import PhotoGallery from './photoGallery'
import SaveAlbum from './saveAlbum'

class Album extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {
			createAlbum: false,
			showAlbumName: "",
			//albums:[],
			//selectedIds: [],
			albumsDict:{}
		};
		this.handleUpdate = this.handleUpdate.bind(this);
		//this.updateSelectedIds = this.updateSelectedIds.bind(this);

	}

	handleButtonClick() {
		this.setState({createAlbum : !this.state.createAlbum});
		console.log(this.state.createAlbum);
	}

	handleAlbumClick(albumName, e) {
		const showAlbum = (this.state.showAlbumName === albumName) ? false: true;
 		this.setState({showAlbumName : albumName});
		const idsForAlbum = this.state.albumsDict[albumName];
		this.props.onAlbumSelect(idsForAlbum, showAlbum);
		console.log(this.state.albumName);
 	}

	handleUpdate(albumToAdd, imageIds){
		// var updatedAlbums = this.state.albums.concat(albumToAdd);
		 this.state.albumsDict[albumToAdd] = imageIds;
		// var imageIdForAlbum = this.props.imageIds
		 //this.setState({albums: updatedAlbums});
		// also set createAlbum to false so the modal will close.
    this.setState({createAlbum : !this.state.createAlbum});
	}



	render() {
	  const {selectImageIds, ...inputProps} = this.props;
		return (
			<p>
			<button class="album-button" onClick={this.handleButtonClick}> Create Album </button>

			{this.state.createAlbum  && <SaveAlbum action={this.handleUpdate} withImageIds={selectImageIds}/>}
					<ol class="album">
					  {Object.keys(this.state.albumsDict).map(k =>{
							return (<li class="album" key={k} onClick={this.handleAlbumClick.bind(this, k)} >{k}</li>)
						})}
	 				</ol>
			</p>
		)}
}





export default Album
