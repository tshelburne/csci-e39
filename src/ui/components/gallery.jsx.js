import React from 'react';
import Lightbox from 'react-images';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentImage: 0};
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  gotoPrevious(){
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  render() {
    console.log(this.props.imageSources)
    return (
      <Lightbox
        images={this.props.imageSources}
        isOpen={this.props.lightboxIsOpen}
        onClickNext={this.gotoNext.bind(this)}
        onClickPrev={this.gotoPrevious.bind(this)}
        currentImage={this.state.currentImage}
        onClose={this.props.onClose}
      />
    );
  }
}