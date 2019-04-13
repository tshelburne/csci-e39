import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Album from '../../ui/components/album'

class PhotoGallery extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
    this.state = {
			selectImage: false,
			selectedImageIds : []
		};
		this.handleClick = this.handleClick.bind(this);
	}

   handleClick(imageId){
		 	var imageSelected = !this.state.selectImage;
			this.setState({selectImage: imageSelected});
			if(imageSelected){
				var updatedSelectedImageIds = this.state.selectedImageIds.concat(imageId);
		 		this.setState({selectedImageIds: updatedSelectedImageIds});
			}
			else{
				var updatedSelectedImageIds = this.state.selectedImageIds.filter(id => id !== imageId);
				this.setState({selectedImageIds: updatedSelectedImageIds});
			}
	 }



	render() {
		const {completedFiles, ...inputProps} = this.props
		if(completedFiles.length > 0){
		 return(
			 <ul class="grid-container">
			 		{completedFiles.map(file => {
	 					const {id, name, url, error} = file
						const cNameForId = findImageId(this.state.selectedImageIds, id) ? "grid-li selected" : "grid-li"
	 						if(!!error)
	 						{
								return (<li class="grid-li" key={id}>
								 <p className="failure">{message}</p></li>)
							}
						else{
							return<li class={cNameForId} key={id} onClick={this.handleClick.bind(this,id)}>
										 <figure class="grid-item"><img src={url} alt={name}/></figure>
								</li>

						}
						})}
	 		</ul>
		)}
		else{
			return<h3> The area where uploaded pictures will be displayed ! </h3>
		}
	}

}

// const ShowImage = ({id, name, url, className, action}) => (
//  <li class={className} key={id} onClick={action.bind(id)}>
// 			 <figure class="grid-item"><img src={url} alt={name}/></figure>
// 	</li>
// )

function findImageId(idArray, imageId) {
	 var found = idArray.find((imgId) => imgId === imageId);
	 return !!found;
 }


const showError = (message) => (
	  <p className="failure">{message}</p>
	// console.log('Error Processing File'+ message)
	)



PhotoGallery.propTypes = {
	completedFiles: PropTypes.func.isRequired,
}

export default PhotoGallery
