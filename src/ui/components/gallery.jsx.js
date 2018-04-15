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
    return (
      <Lightbox
        images={[{ src: 'http://via.placeholder.com/450x450' }, { src: 'http://via.placeholder.com/250x450' }]}
        isOpen={this.props.lightboxIsOpen}
        onClickNext={this.gotoNext.bind(this)}
        onClickPrev={this.gotoPrevious.bind(this)}
        currentImage={this.state.currentImage}
        onClose={this.props.onClose}
      />
    );
  }
}