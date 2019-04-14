import React, { Component } from 'react';

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.onSend = this.onSend.bind(this);
		this.onType = this.onType.bind(this);
		this.state = { currentText: `` };
	}

	onSend(e) {
		if (e.type === `keyup` && e.key !== `Enter`) return

		const {chat} = this.props.actions
		const {currentText} = this.state
		if (!currentText.length) return

		chat.send(currentText)
		this.setState({currentText: ``})
	}

	onType(e) {
		const {chat} = this.props.actions
		const {currentText: prevText} = this.state
		const currentText = e.target.value

		if (!currentText.length) chat.stopTyping()
		if (currentText.length === 1 && !prevText.length) chat.startTyping()

		this.setState({currentText})
	}

	render() {
		const { currentText } = this.state;
		return (
			<div className='input'>
				<input value={ currentText } onChange={this.onType} onKeyUp={this.onSend} />
				<button disabled={ currentText === `` } onClick={this.onSend}>Send</button>
			</div>
		);
	}
}
