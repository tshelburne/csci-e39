import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Album from './album'

class SaveAlbum extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
			value: ''
		};
  }


  handleChange(event){
		console.log('handle change called');
		this.setState({value: event.target.value});
	}


	 handleSubmit(e){
	//	alert('Add to album submitted: ' + this.state.value);
		this.props.action(this.state.value);
	}

   render(){
		 return(<div class="modal">
 		  <div class="model-content">
 			<form onSubmit={this.handleSubmit.bind(this)}>
 			<h3> Create Album </h3>
     		<label for="name">Album Name</label>
     		<input type="text" id="name" name="album_name" value={this.state.value} onChange={this.handleChange.bind(this)}/>
 				<input type="submit" value="Submit"/>
 			</form>
 			</div>
 		</div>)
	 }



}

// Uploader.propTypes = {
// 	upload: PropTypes.func.isRequired,
//alert('A name was submitted: ' + this.state.value);

// }

export default SaveAlbum
