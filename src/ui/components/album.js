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
			albums:[]
		};
		this.handleUpdate = this.handleUpdate.bind(this);

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
		 //e.preventDefault();
		 var updatedAlbums = this.state.albums.concat(albumToAdd);
		 this.setState((state) =>{
			 return{albums: updatedAlbums}
		 });
		 //this.setState({didChange: 2});
		 // this.setState({albums: updatedAlbums}, () => {
  	 // 	console.log(this.state.albums, updatedAlbums);
			// });
		 // this.setState({
  	 // 		albums: [...this.state.albums, ...updatedAlbums]
	 		// });
		 //alert('addToAlbum called in parents: '+ albumToAdd);
		 //console.log(this.state);
		 //console.log(this.state.didChange);
	}

	render() {
		return (
			<p>
			<button class="album-button" onClick={this.handleButtonClick}> Create Album </button>
			{this.state.createAlbum  && <SaveAlbum action={this.handleUpdate}/>}
					<ul>
					  {this.state.albums.map((name, i) =>
							<li key={i}>{name}</li>)
						}
	 				</ul>
			</p>
		)}
}





export default Album
