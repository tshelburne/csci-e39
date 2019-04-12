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
			showAlbumId: -1,
			albums:[],
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

	handleLiClick(albumId, e) {
 		this.setState({showAlbumId : albumId});
		console.log(this.state.showAlbumId);
 	}

	handleUpdate(albumToAdd){
		 var updatedAlbums = this.state.albums.concat(albumToAdd);
		 var updatedDict = this.state.albumsDict
		// var imageIdForAlbum = this.props.imageIds
		 this.setState((state) =>{
			 return{albums: updatedAlbums}
		 });
		// also set createAlbum to false
    this.setState({createAlbum : !this.state.createAlbum});
	}

	// saveSelectedIds(selectedIds){
  //    alert('update called');
	// 	 this.setState({selectedIds: selectedIds});
	//
	// }


	render() {
		//const {imageIds, ...otherProps} = this.props
		return (
			<p>
			<button class="album-button" onClick={this.handleButtonClick}> Create Album </button>

			{this.state.createAlbum  && <SaveAlbum action={this.handleUpdate}/>}
					<ul>
					  {this.state.albums.map((name, i) =>
							<li key={i} onClick={this.handleLiClick.bind(this, i)} >{name}</li>)
						}
	 				</ul>
			</p>
		)}
}





export default Album
