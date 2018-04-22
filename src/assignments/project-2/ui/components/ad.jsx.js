import React from 'react'

const Ad = (props) => {
    const {graphic, buttonLink, borderColor, textColor} = props;

    return <figure>
      <a href={buttonLink}><img src={graphic} alt="Advertisement from sponsor"/></a>
      <a href={buttonLink} className="btn" style={{borderColor: borderColor, color: textColor}}>Learn More</a>
    </figure>
}


export default Ad;
