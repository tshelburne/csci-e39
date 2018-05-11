import React from 'react'
import PropTypes from 'prop-types'

class Picture extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  
  render() {
    const {url, caption, width, captionAlign, ...inputProps} = this.props

     return(
        <figure style={{width: `${width}`}}>
					<img src={url} />
					<figcaption style={{textAlign: `${captionAlign}`}}>{caption}</figcaption>
				</figure>
      )
  }
}

export default Picture