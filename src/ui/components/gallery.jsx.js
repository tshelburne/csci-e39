import React from 'react';
import Lightbox from 'react-images';
import PropTypes from 'prop-types'


const Gallery = ({imageSources, lightboxIsOpen, gotoNext, gotoPrevious, currentImage, onClose}) => (
  <Lightbox
    images={imageSources}
    isOpen={lightboxIsOpen}
    onClickNext={gotoNext}
    onClickPrev={gotoPrevious}
    currentImage={currentImage}
    onClose={onClose}
  />
);

Gallery.propTypes = {
  pendingFiles: PropTypes.array.isRequired,
  imageSources: PropTypes.array.isRequired,
  lightboxIsOpen: PropTypes.bool.isRequired,
  gotoNext: PropTypes.func.isRequired,
  gotoPrevious: PropTypes.func.isRequired,
  currentImage: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Gallery