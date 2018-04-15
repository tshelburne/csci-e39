import React from 'react';
import Lightbox from 'react-images';

export default class Gallery extends React.Component {
  render() {
    console.log(this.props.imageSources)
    return (
      <Lightbox
        images={this.props.imageSources}
        isOpen={this.props.lightboxIsOpen}
        onClickNext={this.props.gotoNext}
        onClickPrev={this.props.gotoPrevious}
        currentImage={this.props.currentImage}
        onClose={this.props.onClose}
      />
    );
  }
}