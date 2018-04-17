/** FileCard component - one for each image */
import React from 'react'
import PropTypes from 'prop-types'

import { PLACEHOLDER_IMAGE } from '../defs'
import { file as card } from '../schemas'
const unmount = PropTypes.func

class FileCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imageTitle: '', 
      editableImageTitle: '',
      isEditingTitle: true,
      placeholderImg: PLACEHOLDER_IMAGE
    }
    this.el = undefined
  }

  render() {
    let {id, name, url, error} = this.props.card
    return (
<article className="FileCard card component">
	{error 
    ? (
  <figure>  
      <button className="dismiss" onClick={() => this.props.unmount(this.props.card)}>❌&nbsp;Dismiss</button>  
      <figcaption title={error}>
      <span className="filename failure">{error}</span>
    </figcaption>
    <img src={this.state.placeholderImg} />
  </figure>
      ) 
    : (
  <figure>  
    <span className="control--title">
      {(!this.state.imageTitle || this.state.isEditingTitle)
        ? <input type="text" 
                 className="title input--title" 
                 placeholder="title" 
                 value={this.state.editableImageTitle}
                 onChange={e => this.setState({editableImageTitle: e.target.value})}
                 onKeyPress={ev => {
                  if (ev.key === 'Enter') {
                    // Do code here
                    this.updateImageTitle(this.state.editableImageTitle)
                    ev.preventDefault();
                  }
                 }}
                 onBlur={(e) => this.updateImageTitle(e.target.value)}/>
        : <span className="title" title={this.state.imageTitle} onClick={() => this.setState({isEditingTitle: true})}>{this.state.imageTitle}</span>
      }
    </span>
    {(this.state.editableImageTitle !== this.state.imageTitle)
      ? (
    <button className="changeImageTitle" onClick={() => this.updateImageTitle(this.state.editableImageTitle)}>
        🆙 Submit
    </button>
        )
      : ''
    }
    <figcaption title={name}>
      <span className="filename">{name}</span>
    </figcaption>
    <img className="cardImage" src={url} />
  </figure>
      )
    }
</article>  
    )
  } 
  
  /** updates the imageTitle state */
  updateImageTitle (title) {
    if(title) {
      this.setState({isEditingTitle: false, imageTitle: title, editableImageTitle: title})      
    } else {
      this.setState({isEditingTitle: false, imageTitle: '', editableImageTitle: ''})
    }
  }
  
  hideThisElement () {
    if(this.el)
      this.el.style.display = 'none'
  }
}

FileCard.propTypes = { 
  card,
  unmount
}

export default FileCard
