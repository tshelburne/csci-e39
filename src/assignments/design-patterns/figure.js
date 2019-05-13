import React from 'react'



const Fig = ({imgUrl, alt, imgCaption, ...props}) => (
    <figure class="image-container">
    <img src={imgUrl} alt={alt}></img>
    <figcaption>{imgCaption}</figcaption>
  </figure>

)

export default Fig
