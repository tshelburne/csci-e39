import React from 'react'
import autobind from 'class-autobind'

class Heading extends React.Component {
  constructor() {
    super(...arguments)
    autobind(this)
  }
  render(){
    const {pageTitle, pageDesc} = this.props

    return <div>
			<h1>{this.props.pageTitle}</h1>
			<p>{this.props.pageDesc}</p>
		</div>	
  }
}

export default Heading;
