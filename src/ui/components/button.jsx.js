import React from 'react'
import Weather from '../../ui/components/hello.jsx'

class Button extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			widgetActive: false,
		}
	}

	toggleWidget(){
		this.setState({widgetActive: !this.state.widgetActive})
	}

	render() {
		const buttonText = this.state.widgetActive ? 'Toggle Off' : 'Toggle On';
		const {widgetActive} = this.state

		return (
		<div className="example-container button-container">
			<h1 className="header">Button with decorative element</h1>
			<button onClick={this.toggleWidget.bind(this)}>{buttonText}</button>
			{ widgetActive && <Weather /> }
		</div>
		
		);
	}
}


export default Button
