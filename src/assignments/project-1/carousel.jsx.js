/* Banner carousel */
/* Forked from https://github.com/akiran/react-slick */

import React from 'react'
import Slider from 'react-slick'

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <picture>
           <source media="(max-width: 767px)" srcSet="https://cdn.pbrd.co/images/Hh2pCmQ.jpg" />
           <source media="(min-width: 768px)" srcSet="https://cdn.pbrd.co/images/Hh2pr1X.jpg" />
           <img src="https://cdn.pbrd.co/images/Hh2pr1X.jpg" title ="Wakhan Valley" alt="Wakhan Valley at Tajikistan/Afganistan border" />
        </picture>
        <picture>
           <source media="(max-width: 767px)" srcSet="https://cdn.pbrd.co/images/Hh2cnaR.jpg" />
           <source media="(min-width: 768px)" srcSet="https://cdn.pbrd.co/images/Hh2ch00.jpg" />
           <img src="https://cdn.pbrd.co/images/Hh2ch00.jpg" title ="Mt Kosciuszko" alt="Mount Kosciuszko is the highest mountain in Australia" />
        </picture>
      </Slider>
    );
  }
}

export default Carousel