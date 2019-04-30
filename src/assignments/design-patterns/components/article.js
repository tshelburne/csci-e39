import React from 'react'
import PropTypes from 'prop-types'

const Article = ({articleHeadline, articleTitle, articleFooter, children, ...props}) => {
  return <div {...props} className="article-styles">
      <h1>{articleHeadline}</h1>
      <h2>{articleTitle}</h2>
      {children}
      <p><small>{articleFooter}</small></p>
    </div>
}

Article.propTypes = {
  	articleHeadline: PropTypes.string,
    articleTitle: PropTypes.string,
    acticleFooter: PropTypes.string,
  }

export default Article;
