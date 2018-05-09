import React from 'react'
import PropTypes from 'prop-types'
import ImageCard from "./ImageCard.jsx";

class MemoryPair extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    // PS, I use () after return to ensure that I can move the html from the same line as return,
    // and shift it to the left so it is legible without requiring use of the scrollbar
    return (
<div className="MemoryPair component flex" style={this.props.aspect}>
  <div className={'card-transition' + (this.props.isVisible? ' face-up': '')}>
    <div className="card back-face">
      <ImageCard imgSrc={this.props.imgSrc} caption={this.props.caption} />
    </div>
    <div className={'card memory-pair--control' + (this.props.isVisible? ' hidden': '')}
         onClick={this.toggleVisibility.bind(this)}></div>
  </div>
</div>
    )
  }

  toggleVisibility () {
    if(!this.props.isLocked) {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange({sibling: this.props.sibling})
      }
    }
  }
}

export default MemoryPair
