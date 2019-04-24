import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Album from '../../ui/components/album'

class PhotoGallery extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}


	render() {
		const {completedFiles, selectImageIds, showAlbum, albumIds, ...inputProps} = this.props
		const displayFiles = showAlbum ? filterCompletedFiles(completedFiles, albumIds) : completedFiles
		if(displayFiles.length > 0){
		 return(
			 <ul class="grid-container grid">
			 		{displayFiles.map(file => {
	 					const {id, name, url, error} = file
						const cNameForId = findImageId(selectImageIds, id) ? "grid-li selected" : "grid-li"
	 						if(!!error)
	 						{
								return (<li class="grid-li" key={id}>
								 <p className="failure">{message}</p></li>)
							}
						else{
							return<li class={cNameForId} key={id} onClick={() => this.props.selectImage(id)}>
										 <figure class="grid-item"><img src={url} alt={name}/></figure>
								</li>

						}
						})}
	 		</ul>
		)}
		else{
			return (
				<ul class="grid-container grid">
				<li class="grid-li">
				<figure class="grid-item"><img src="https://ashtangayogaaustin.com/wp-content/uploads/2016/01/IMG_8611-Large.jpg" alt="priya"/></figure>
				</li>
				</ul>
			)
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


 function filterCompletedFiles(completedFiles, albumIds) {
 	 var filtered = completedFiles.filter(x => albumIds.includes(x.id));
 	 return filtered;
  }

const showError = (message) => (
	  <p className="failure">{message}</p>
	// console.log('Error Processing File'+ message)
	)



PhotoGallery.propTypes = {
	completedFiles: PropTypes.func.isRequired,
}

export default PhotoGallery
