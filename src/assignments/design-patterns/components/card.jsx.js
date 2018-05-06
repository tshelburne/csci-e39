import React from 'react'
import PropTypes from 'prop-types'

//based on project 1 card component

const LinkCard = ({url, extraClass, children}) => 
  <a href={url}>
    <div className={`card-${extraClass}`} >
      {children}
    </div>
  </a>
  

export const GreenLinkCard = ({url, children}) =>
  <LinkCard url={url} extraClass="green-container">{children}</LinkCard>
    
GreenLinkCard.displayName = `GreenLinkCard`


export const PinkLinkCard = ({url, children}) =>
  <LinkCard url={url} extraClass="pink-container">{children}</LinkCard>
   
PinkLinkCard.displayName = `PinkLinkCard`



export const Card = ({image, alt, title, description, extraClass, children}) => 
  <div className="card-container" >
      <img src={image} alt={alt} />
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
  </div>

Card.displayName = `Card`
   


Card.propTypes = {
  image: PropTypes.string,
  title:PropTypes.string,
  description: PropTypes.string,
}


