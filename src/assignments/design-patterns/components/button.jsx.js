import React from 'react'
import TemperatureInput from './inputTemp.jsx'


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
		const buttonText = this.state.widgetActive ? 'Off' : 'On';
		const {widgetActive} = this.state
		

		return (
			<div>
				<h1>Nested component</h1>
				<button className="default-button" onClick={this.toggleWidget.bind(this)}>{buttonText}</button>
				{widgetActive && this.props.children}				
			</div>
		
		)
	}
}




export default Button
