import React from 'react'
import autobind from 'class-autobind'

class Foot extends React.Component {
  constructor() {
    super(...arguments)
    autobind(this)
  }
  render(){
    const {copyright} = this.props

    return <footer>
			<p>{this.props.copyright}</p>
		</footer>
  }
}

export default Foot;
