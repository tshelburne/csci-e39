import React from 'react'
import { BiggerText, SmallerText, ResetText } from './button.jsx'

export class TextSizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 14
    };
  }

  render() {
  	const styles = {
  		fontSize: this.state.fontSize
  	};
  	return <div style={styles}>
	    <BiggerText
	      label="Click me for bigger text!"
	      onClick={() => this.setState({fontSize: this.state.fontSize * (3/2)})} />
	    <SmallerText
	      label="Click me for smaller text!"
	      onClick={() => this.setState({fontSize: this.state.fontSize * (2/3)})} />
	    <ResetText
	      label="Click me for default text!"
	      onClick={() => this.setState({fontSize: this.state.fontSize = 14})} />
      </div>
  }
}