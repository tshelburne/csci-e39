import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Member from '../../ui/components/member'

import './app.scss'

class Chat extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {currentText: ``}
	}

	onType(e) {
		const {chat} = this.props.actions
		const {currentText: prevText} = this.state
		const currentText = e.target.value

		if (!currentText.length) chat.stopTyping()
		if (currentText.length === 1 && !prevText.length) chat.startTyping()

		this.setState({currentText})
	}

	onSend(e) {
		if (e.type === `keyup` && e.key !== `Enter`) return

		const {chat} = this.props.actions
		const {currentText} = this.state
		if (!currentText.length) return

		chat.send(currentText)
		this.setState({currentText: ``})
	}

	getTypingMessage() {
		const {typing} = this.props.chat

		switch (typing.length) {
			case 0: return null
			case 1: return `${typing[0].name} is typing...`
			case 2: return `${typing[0].name} and ${typing[1].name} are typing...`
			case 3: return `${typing[0].name}, ${typing[1].name}, and ${typing[2].name} are typing...`
			// len > 3
			default: return `${typing.length} members are typing...`
		}
	}

	render() {
		const {classroom, chat, actions} = this.props
		const {currentText} = this.state

		return <div class="container">
			<header>
				<h1>Chatroom</h1>
				<Member classroom={classroom}/>
			</header>
			
			<nav>
				<h2>Members</h2>
				<ul>
					{classroom.students.map(({id, name}) =>
						<li key={id}><span>{name}</span></li>
					)}
				</ul>
			</nav>
			
			<main>
				<h2>Messages</h2>
				<ul>
					{chat.messages.map(({id, student, text, createdAt}) =>
						<li key={id}>
							<label>{student.name} at {createdAt.toISOString()}</label>
							<p>{text}</p>
						</li>
					)}
				</ul>
			</main>
			
			<footer>
				<input value={currentText} onChange={this.onType} onKeyUp={this.onSend} />
				<button disabled={currentText === ``} onClick={this.onSend}>Send</button>
				<p>{this.getTypingMessage()}</p>
			</footer>
			
		</div>
	}

}

const studentPropType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
})

Chat.propTypes = {
	classroom: PropTypes.shape({
		self: studentPropType,
		students: PropTypes.arrayOf(studentPropType).isRequired,
	}).isRequired,
	chat: PropTypes.shape({
		typing: PropTypes.arrayOf(studentPropType).isRequired,
		messages: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			student: studentPropType,
			createdAt: PropTypes.instanceOf(Date).isRequired,
		})).isRequired,
		send: PropTypes.shape({
			status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
			message: PropTypes.string.isRequired,
		}).isRequired
	}),
	actions: PropTypes.object.isRequired,
}

export default Chat
