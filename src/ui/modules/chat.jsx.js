import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Chat extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {currentText: ``}
	}

	onType(e) {
		const {startTyping, stopTyping} = this.props.actions.chat
		const {currentText: prevText} = this.state
		const currentText = e.target.value
		if (!currentText.length) stopTyping()
		if (currentText.length === 1 && !prevText.length) startTyping()
		this.setState({currentText})
	}

	onSend() {
		this.props.actions.chat.send(this.state.currentText)
		this.setState({currentText: ``})
	}

	render() {
		const {classroom, chat, actions} = this.props
		const {currentText} = this.state

		return <div>
			<h1>Chatroom</h1>

			<h2>Members</h2>
			<ul>
				{classroom.students.map(({id, name}) =>
					<li key={id}><span>{name}</span></li>
				)}
			</ul>

			<h2>Messages</h2>
			<ul>
				{chat.messages.map(({id, student, text, timestamp}) =>
					<li key={id}>
						<label>{student.name} at {new Date(timestamp).toISOString()}</label>
						<p>{text}</p>
					</li>
				)}
			</ul>

			<input value={currentText} onChange={this.onType} />
			<button disabled={currentText === ``} onClick={this.onSend}>Send</button>
		</div>
	}

}

const studentPropType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
})

Chat.propTypes = {
	classroom: PropTypes.shape({
		students: PropTypes.arrayOf(studentPropType).isRequired,
	}).isRequired,
	chat: PropTypes.shape({
		typing: PropTypes.arrayOf(studentPropType).isRequired,
		messages: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			student: studentPropType,
			timestamp: PropTypes.instanceOf(Date).isRequired,
		})).isRequired,
		send: PropTypes.shape({
			status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
			message: PropTypes.string.isRequired,
		}).isRequired
	}),
	actions: PropTypes.object.isRequired,
}

export default Chat
