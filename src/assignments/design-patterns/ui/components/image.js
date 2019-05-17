import React from 'react'

const Image = ({className, small, large, alt}) =>
  <picture className={className}>
    <source media="(max-width: 767px)" srcSet={small} />
    <source media="(min-width: 768px)" srcset={large} />
    <img src={large} alt={alt} />
  </picture>

export default Image