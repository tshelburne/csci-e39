import React from 'react'
import NPWrapper from '../../ui/components/np-list.jsx'
import TemperatureInput from '../../ui/components/inputTemp.jsx'

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
		<div className="container button-container">
			<h1 className="header">SideBar</h1>
			<button onClick={this.toggleWidget.bind(this)}>{buttonText}</button>
			{ widgetActive && <aside>
								<NPWrapper />
								<TemperatureInput />
							</aside> }
		</div>
		
		);
	}
}


export default Button
