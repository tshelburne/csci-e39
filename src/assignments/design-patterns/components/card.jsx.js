import React from 'react'
import PropTypes from 'prop-types'

//based on project 1 card component

const LinkCard = ({url, extraClass, children}) =>
  <div className="link-card">
  <a href={url}>
    <div className={`card-${extraClass}`} >
      {children}
    </div>
  </a>
  </div>
  

export const LinkCardOne = ({url, children}) =>
  <LinkCard url={url} extraClass="green-link-container">{children}</LinkCard>
    
LinkCardOne.displayName = `LinkCardOne`


export const LinkCardTwo = ({url, children}) =>
  <LinkCard url={url} extraClass="pink-link-container">{children}</LinkCard>
   
LinkCardTwo.displayName = `LinkCardTwo`


//card component is a container for 2 components used in project 1

export const Card = ({image, alt, title, description, extraClass, children}) => 
  <div className="card" >
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


