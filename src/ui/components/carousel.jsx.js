import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
// import Slider from 'react-slick'

class Carousel extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {

        const settings = {
            speed: 500,
            slidesToShow: 1,
          };

       var allImages = this.props.uploadedFiles.map(file => {
            const {id, name, url, error} = file
            return <img title={name} alt={name} key={id} src={url} />;
        });

		return <div><Slider {...settings}>{allImages}</Slider></div>
	}

}

Carousel.propTypes = {
	uploadedFiles: PropTypes.array.isRequired,
}

export default Carousel
