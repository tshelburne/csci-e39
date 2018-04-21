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
      <section id="theme-widget" role="themer">
        <Themer 
          label={"Background"} 
          value={"#000000"} 
        />
        <Themer 
          label={"Text"}
          value={"#01FF70"}  
        />
        <Themer 
          label={"Wallpaper"}
          value={"#ff0000"} 
        />
      </section>
    </header>
  }


}

  function Themer(props){
    return(
      <form>
      <label for="colorpicker">{props.label}</label>
      <input id="colorpicker" type="color" value={props.value}/>
      </form>
    );
  }

export default Header;