import React from 'react'
import Lightbox from 'react-image-lightbox'

class AlbumLightbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const {photoIndex, isOpen} = this.state
    const {images} = this.props

    return (
      <div>
        <button type="button" onClick = {() => this.setState({isOpen: true})}>
          Open slideshow
        </button>
        {isOpen && <Lightbox
          mainSrc = {images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })
          }
          />}
      </div>
    )
  }
}

export default AlbumLightbox
