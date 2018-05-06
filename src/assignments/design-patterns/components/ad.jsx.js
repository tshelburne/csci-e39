import React from 'react'
import PropTypes from 'prop-types'

//from project 2

class Ad extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    window.location = this.props.siteUrl;
    return false;
  }

  render() {
    const {image, mobileImage, alt, text} = this.props;

    return <div className="ad-container">
              <div>
                <picture className="ad">
                  <source media="(max-width: 767px)" srcSet={mobileImage} />
                  <source media="(min-width: 768px)" srcSet={image} />
                  <img src={image} alt={alt} />
                </picture>
              </div>
              <button  onClick={this.clickHandler}>{text}</button>
           </div>
  };
}

export default Ad
