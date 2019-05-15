import React from 'react'

import autobind from 'class-autobind'

class Image extends React.Component {

  constructor() {
    super(...arguments)
  }

  render() {
    const { subject, width, height, alt } = this.props
    let baseUrl = null
    let separator = "/"
    let defaultWidth = "150"
    let defaultHeight = "150"
    let source = null

    if (typeof subject === "undefined") {
      source = "https://imgplaceholder.com/200x120/cccccc/060000?text=Must+specify_br_image+subject&font-size=24&font-family=Raleway_Bold"
    } else if (subject === "kitten") {
      baseUrl = "https://placekitten.com/"
    } else if (subject === "bacon") {
      baseUrl = "https://baconmockup.com/"
    } else if (subject === "murray") {
      baseUrl = "https://www.fillmurray.com/"
    } else if (subject === "cage") {
      baseUrl = "https://www.placecage.com/"
    } else if (subject === "bear") {
      baseUrl = "https://placebear.com/"
    } else if (subject === "zombie") {
      baseUrl = "https://placezombie.com/"
      separator = "x"
    } else if (subject === "beard") {
      baseUrl = "https://placebeard.it/"
      separator = "x"
    } else {
      source = "https://imgplaceholder.com/200x120/cccccc/060000?text=Image+subject_br_not+valid&font-size=24&font-family=Raleway_Bold"
    }

    if (baseUrl && separator) {
      source = baseUrl + (width || defaultWidth) + separator + (height || defaultHeight)
    }

    return  <img
      src={source}
      alt={alt || subject}
      width={width}
      height={height}
    />
  }
}

export default Image
