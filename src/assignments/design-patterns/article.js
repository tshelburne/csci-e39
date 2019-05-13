import React from 'react'
import Fig from './figure'


export const ArticleWithoutImage = ({para, ...props}) => <SimpleArticle {...props} para={para}  />
export const ArticleWithImage = ({para, imgUrl, ...props}) => <SimpleArticle {...props} para={para}  imgUrl={imgUrl} />

/// Helper


const SimpleArticle = ({para, imgUrl, footerText, ...props}) => {
 const className = (!!imgUrl) ? 'article-grid': ''
 return(  <article class={className}>
  {imgUrl && <Fig {...props} imgUrl={imgUrl} />}
  <p>{para}</p>
  </article>
 )
}

export default SimpleArticle
