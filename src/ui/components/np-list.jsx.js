import React from 'react'
import PropTypes from 'prop-types'


class NPWrapper extends React.Component {
  render(){
    return <div className="list">
              <NationalParks parks = {PARKS} />
            </div>
  }
}


const NationalParks = ({parks}) => (
    <List >
    {parks.map((park, index) =>
      <OnePark  key = {index}
                url = {park.url}
                className = {park.className}
                image = {park.image}
                mobileImage = {park.mobileImage}
                title={park.title}
                description = {park.description}
            /> )}   
    </List>

  );

const List = ({children, ...props}) =>
  <ul {...props}>
    {React.Children.map(children, child => <li>{child}</li>)}
  </ul>


const OnePark = ({url, className, image,mobileImage, title, description}) => (
  <a href={url}>
          <div className = {className} >
            <picture>
              <source media="(max-width: 767px)" 
                srcSet={mobileImage} />
              <source media="(min-width: 768px)" 
                srcSet={image} />
              <img src={image} 
                alt="something" />
            </picture>
            <h2 >{title}</h2>
            <p >{description}</p>
          </div>
    </a>
  
);


const PARKS = [
     { 
       url: "https://www.nps.gov/yose/index.htm",
       className: "NP-list container ",
       image: "https://via.placeholder.com/200x200",
       mobileImg: "https://via.placeholder.com/150x150",
       title:"Yosemite",
       description: "Not just a great valley, but a shrine to human foresight, the strength of granite, the power"+
       "of glaciers, the persistence of life, and the tranquility of the High Sierra.",
     },
     { 
       url: "https://www.nps.gov/ever/index.htm",
       className: "NP-list container ",
       image: "https://via.placeholder.com/200x200",
       mobileImg: "https://via.placeholder.com/150x150",
       title:"Everglades",
       description: "Everglades National Park protects an unparalleled landscape that provides important habitat for" +
       "numerous rare and endangered species like the manatee,  American crocodile, and the elusive Florida panther.",
     }   
   ];

OnePark.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
  mobileImg: PropTypes.string,
  title:PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default NPWrapper
