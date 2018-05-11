import React from 'react'
import PropTypes from 'prop-types'
{/* SVG Icons designed by Dario Ferrando.  
    Download Linea at http://linea.io/ 
    Linea is distributed under CCBY license http://creativecommons.org/licenses/by/4.0/
    Some of the SVG code has been edited to suit this project. 
*/}

class SVG extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  
  render() {
    const {color, width, height, icon, ...inputProps} = this.props
    let svgIcon;
    
    if (this.props.icon == 'close') {
      svgIcon = (
        <svg width={width} height={height} viewBox="0 0 21 21" style={{stroke: `${color}`}}>
          <g id="close-symbol">
            <g id="Group-3" transform="translate(10.646447, 10.353553) rotate(45.000000) translate(-10.646447, -10.353553) translate(-4.353553, -4.146447)">
              <path d="M15,0.666666667 L15,28.8492424"></path>
              <path d="M15.2071068,0.357864376 L15.2071068,28.6421356" transform="translate(15.000000, 14.500000) rotate(90.000000) translate(-15.000000, -14.500000) "></path>
            </g>
          </g>
        </svg>
      )
    }
    else if (this.props.icon == 'delete'){
      svgIcon = (
        <svg width={width} height={height} viewBox="0 0 64 64">
          <g>
          	<polyline fill="none" stroke={color} strokeWidth="2" points="25,8 25,1 39,1 39,8 	"/>
          	<polyline fill="none" stroke={color} strokeWidth="2" points="14,10 14,63 50,63 50,10 	"/>
          	<line fill="none" stroke={color} strokeWidth="2" x1="26" y1="20" x2="26" y2="54"/>
          	<line fill="none" stroke={color} strokeWidth="2" x1="38" y1="20" x2="38" y2="54"/>
          	<line fill="none" stroke={color} strokeWidth="2" x1="10" y1="9" x2="54" y2="9"/>
          </g>
        </svg>
      )
    }
    else if (this.props.icon == 'edit'){
      svgIcon = (
        <svg width={width} height={height} viewBox="0 0 64 64">
        <g>
        	<line fill="none" stroke={color} strokeWidth="2" x1="20" y1="54" x2="10" y2="44"/>
        </g>
        <polygon fill="none" stroke={color} strokeWidth="2" points="10,44 1,62 2,63 20,54 63,11 53,1 "/>
        <line fill="none" stroke={color} strokeWidth="2" x1="54" y1="20" x2="44" y2="10"/>
        <line fill="none" stroke={color} strokeWidth="2" x1="58" y1="16" x2="48" y2="6"/>
        <polyline fill="none" stroke={color} strokeWidth="2" points="5,54 9,55 10,59 "/>
        </svg>
      )
    }
    else if (this.props.icon == 'add'){
      svgIcon = (
        <svg width={width} height={height} viewBox="0 0 64 64">
          <g>
          	<line fill="none" stroke={color} stroke-width="2" x1="32" y1="50" x2="32" y2="14"/>
          	<line fill="none" stroke={color} stroke-width="2" x1="14" y1="32" x2="50" y2="32"/>
          </g>
        </svg>
      )
    }
    else if (this.props.icon == 'open'){
      svgIcon = (
        <svg width={width} height={height} viewBox="0 0 64 64">
          <g>
          	<polyline fill="none" stroke={color} strokeWidth="2" points="15,40 32,23 49,40 	"/>
          </g>
        </svg>
      )
    }
    else if (this.props.icon == 'shut'){
      svgIcon = (
        <svg width={width} height={height} viewBox="0 0 64 64">
          <g>
          	<polyline fill="none" stroke={color} strokeWidth="2" points="15,24 32,41 49,24 	"/>
          </g>
        </svg>
      )
    }

     return(
          <span>{ svgIcon }</span>
      )
  }
}

export default SVG