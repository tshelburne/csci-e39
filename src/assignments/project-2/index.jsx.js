import React from 'react'
import PropTypes from './support/prop-types'
import autobind from 'class-autobind'
import List from './components/List.jsx'
import Member from './components/Member.jsx'
import Composer from './components/Composer.jsx'
import Header from './ui/components/header.jsx'

class Chat extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
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

		return <main>
			<Header title="Chatroom" />
 			<aside id="memberlist">
					<h2>Members</h2>
					<List>
						{classroom.students.map((student, index) =>
							<Member id={student.id} key={student.id} name={student.name}></Member>
						)}
					</List>
					</aside>
					
			<section id="messages">
					<h2>Messages</h2>
					<ul>
						{chat.messages.map(({id, student, text, createdAt}) =>
							<li key={id}>
								<label>{student.name} at {createdAt.toISOString()}</label>
								<p>{text}</p>
							</li>
						)}
					</ul>
			</section>
			<section id="typing">
			  <Composer chat={chat} actions={this.props.actions} members={classroom}/>
			</section>
		</main>
	}

}

Chat.propTypes = {
	classroom: PropTypes.shape({
	  	//shape defines what object will look like
		students: PropTypes.arrayOf(PropTypes.member).isRequired,
		//students is a property of classroom
		//students is an array of studentPropType. access it with an array [1][2] etc. studentPropType is  shape that has id and name
	}).isRequired,
	chat: PropTypes.shape({
		typing: PropTypes.arrayOf(PropTypes.member).isRequired,
		messages: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			member: PropTypes.member,
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
