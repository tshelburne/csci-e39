import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Image from './image.jsx'
import {Button} from './button.jsx'

class Gallery extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
    this.state = {show: true}
	}
  
  showGallery() {
    this.setState( {show: !this.state.show} );
  }
  
  renderImage(image) {
    return (
        <div key={image.url} className="galleryimage">
          <Image url={image.url} alt={image.alt} />
        </div>
    );
  }

	render() {
		const {images, ...inputProps} = this.props;
    const {show} = this.state;
		
		return (
      <section>
        <Button name={this.state.show ? 'Hide' : 'Show'} onClick={this.showGallery} />
        {show && <div className="gallery">
          {this.props.images.map(image => this.renderImage(image))}
        </div>}
      </section>
    )
	}

}

Gallery.propTypes = {
  images: React.PropTypes.arrayOf(PropTypes.shape({
		url: PropTypes.string.isRequired,
		alt: PropTypes.string,
	})).isRequired,
}


export default Gallery
