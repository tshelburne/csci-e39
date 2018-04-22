import React from 'react'
import autobind from 'class-autobind'

class Ad extends React.Component {
  constructor() {
    super(...arguments)
    autobind(this)
  }
  render(){
    const {graphic, buttonLink, borderColor, textColor} = this.props

    return <figure>
      <img src={this.props.graphic} alt="Advertisement from sponsor"/>
      <a href={this.props.buttonLink} className="btn" style={{borderColor: this.props.borderColor, color: this.props.textColor}}>Learn More</a>
    </figure>
  }


}


export default Ad;
