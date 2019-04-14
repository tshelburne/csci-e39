import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Member from '../../ui/components/member'
import Textbox from '../../ui/components/textbox'
import './app.scss'

class Chat extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {currentText: ``}
	}


	render() {
		const {classroom, chat, actions} = this.props
		const {currentText} = this.state

		return <div class="container">
			<header>
				<h1>Chatroom</h1>
			</header>

			{/*<div id='body-container'>*/}

			<Member classroom={classroom}/>
			
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
			{/*</div>*/}
			
			<footer>
				<Textbox chat={chat} actions={actions}/>
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
