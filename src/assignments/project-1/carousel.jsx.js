/* Banner carousel */
/* Forked from https://github.com/akiran/react-slick */

//1-1170: https://cdn.pbrd.co/images/Hhcxv3j.jpg 
//1-450: https://cdn.pbrd.co/images/HhcxXlT.jpg

//2-1170: https://cdn.pbrd.co/images/Hhcyi7E.jpg 
//2-450: https://cdn.pbrd.co/images/HhcyxFW.jpg 


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
           <source media="(min-width: 768px)" srcSet="https://cdn.pbrd.co/images/Hhcxv3j.jpg " />
           <img src="https://cdn.pbrd.co/images/Hhcxv3j.jpg " title ="Wakhan Valley" alt="Wakhan Valley at Tajikistan/Afganistan border" />
        </picture>
        <picture>
           <source media="(max-width: 767px)" srcSet="https://cdn.pbrd.co/images/Hh2cnaR.jpg" />
           <source media="(min-width: 768px)" srcSet="https://cdn.pbrd.co/images/Hhcyi7E.jpg" />
           <img src="https://cdn.pbrd.co/images/Hhcyi7E.jpg" title ="Mt Kosciuszko" alt="Mount Kosciuszko is the highest mountain in Australia" />
        </picture>
      </Slider>
    );
  }
}

export default Carousel