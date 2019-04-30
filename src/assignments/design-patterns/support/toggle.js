import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import jsxToString from 'jsx-to-string'
import beautify from 'js-beautify'



class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDayView: true};
    this.handleClick = this.handleClick.bind(this);
  }
  
  
  handleClick() {
    this.setState(state => ({
      isDayView: !state.isDayView
    }));
  }
  
  render() {
  	var myClassName;
    
    if (this.state.isDayView == true) {
    	myClassName = "day-view"
    } else {
    	myClassName = "night-view"
    }
  
    return (
      <div className={myClassName}>
         

        <button onClick={this.handleClick}>
           <label>{myClassName}</label>
        </button>
   
        

      </div>
    )
  }
}



Toggle.propTypes = {
	name: PropTypes.string,
}

Toggle.contextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default Toggle