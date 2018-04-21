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
      <Greeting />
    </header>
  }


}

  function Greeting(props){
    return(
      <p>This is just text</p>
    );
  }

export default Header;