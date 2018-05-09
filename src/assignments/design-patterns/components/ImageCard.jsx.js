import React from 'react'
import PropTypes from 'prop-types'

class ImageCard extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
<div className="ImageCard component">
    <figure>
        <figcaption>
            <p>
                {this.props.caption}
            </p>
        </figcaption>
        <img src={this.props.imgSrc} />
    </figure>
</div>
        )
    }
}

export default ImageCard