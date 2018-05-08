import React from 'react'

const Card = ({imageLink,imageCategory,imageSize,className,altText,onClick}) =>
<img src={`https://${imageLink}/${imageSize}/?${imageCategory}`} className={className} alt={altText} onClick={onClick}/>
 
export default Card