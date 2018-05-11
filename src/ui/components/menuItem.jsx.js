import React from 'react'
import autobind from 'class-autobind'

class MenuItem extends React.Component {
  constructor() {
    super(...arguments)
    autobind(this)
  }
  render(){
    const {url, link} = this.props

    return <a href={this.props.url}>{this.props.link}</a>
  }
}

export default MenuItem;
