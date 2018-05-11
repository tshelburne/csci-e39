import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  
  render() {
    const {title, subtitle, text, children, ...inputProps} = this.props
    
     return(
      <div className="card">
        <header>
		      <h1>{title}</h1>
        </header>
        <article>
			    <h2>{subtitle}</h2>
          <p>{text}</p>
        </article>
        <aside>{children}</aside>
      </div>
      )
  }
}

export default Card