import React from 'react'
import autobind from 'class-autobind'

class Header extends React.Component {
  constructor() {
    super(...arguments)
    autobind(this)
  }
  render(){
    const {title,onChange,borderColor,colors} = this.props
    const {bgColor, textColor, wallColor} = colors;

    return <header style={{borderColor: borderColor}}>
      <h1>{title}</h1>
      <section id="theme-widget" role="themer">
        <Themer
          label={"Background"}
          value={bgColor}
          onChange={(t) => onChange("bg", t)}
        />
        <Themer
          label={"Text"}
          value={textColor}
          onChange={(t) => onChange("text", t)}
        />
        <Themer
          label={"Wallpaper"}
          value={wallColor}
          onChange={(t) => onChange("wall", t)}
        />
      </section>
    </header>
  }


}

  function Themer(props){
    return(
      <form>
      <label htmlFor="colorpicker">{props.label}</label>
      <input id="colorpicker" type="color" value={props.value} onChange={props.onChange}/>
      </form>
    );
  }

export default Header;
