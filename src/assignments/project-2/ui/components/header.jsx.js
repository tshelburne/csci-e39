import React from 'react'
import autobind from 'class-autobind'

class Header extends React.Component {
  constructor() {
    super(...arguments)
    autobind(this)
  }
  render(){
    const {title} = this.props
    return <header>
      <h1>{title}</h1>
      <Themer />
      <Themer />
      <Themer />
      <Themer />
    </header>
  }


}

  function Themer(props){
    return(
      <input type="color" />
    );
  }

export default Header;