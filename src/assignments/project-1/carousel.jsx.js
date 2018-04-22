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
           <source media="(max-width: 60rem)" srcSet="https://cdn.pbrd.co/images/Hh2pCmQ.jpg" />
           <source media="(min-width: 61rem)" srcSet="https://cdn.pbrd.co/images/Hhcyi7E.jpg " />
           <img src="https://cdn.pbrd.co/images/Hhcxv3j.jpg " title ="Wakhan Valley" alt="The Pamir Highway is the second highest motorway in the world and takes you through stunning mountain scenery in the Pamir region of Tajikistan, with an optional side trip to the Wakhan Valley that has views across to Afghanistan and the Hindu Kush mountain range." />
        </picture>
        <picture>
           <source media="(max-width: 60rem)" srcSet="https://cdn.pbrd.co/images/Hh2pCmQ.jpg" />
           <source media="(min-width: 61rem)" srcSet="https://cdn.pbrd.co/images/Hhcyi7E.jpg " />
           <img src="https://cdn.pbrd.co/images/Hhcxv3j.jpg " title ="Wakhan Valley" alt="The Pamir Highway is the second highest motorway in the world and takes you through stunning mountain scenery in the Pamir region of Tajikistan, with an optional side trip to the Wakhan Valley that has views across to Afghanistan and the Hindu Kush mountain range." />
        </picture>
      </Slider>
    );
  }
}

export default Carousel

