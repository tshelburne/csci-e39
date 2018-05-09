import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'



class Photo extends React.Component {
    constructor() {
        super(...arguments);
        autobind(this);
    }

    render() {
        return <div className="photo">
                    <div className="photoImage">
                        <img src={this.props.imageUrl} alt={this.props.imageAltText} /> 
                    </div>
                    <div className="photoCopyContainer">
                        <p className="photoCopy">{this.props.copy}</p>
                    </div>
        </div>
    }
        
    }

Photo.PropTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageAltText: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired
}

export default Photo