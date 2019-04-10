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
		const {completedFiles, ...inputProps} = this.props
		 return(
    	 <ul class="grid-container">

	 				{completedFiles.map(file => {
	 					const {id, name, url, error} = file

	 					return <li key={id}>

	 						{!error &&
	               <figure class="grid-item">
	 									<img src={url} alt={name}/>

	 							</figure>
	 						}
	 						{!!error &&  <p className="failure">{message}</p>}
							{/* !!error &&  <ErrorMessage message={error}/> */}
	 						</li>
	 					})}

	 		</ul>
		)
	}

}

const ErrorMessage = (message) => (
	  <p className="failure">{message}</p>
	// console.log('Error Processing File'+ message)
	)



PhotoGallery.propTypes = {
	completedFiles: PropTypes.func.isRequired,
}

export default PhotoGallery
