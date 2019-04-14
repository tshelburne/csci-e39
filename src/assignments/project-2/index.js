import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Member from '../../ui/components/member'
import Textbox from '../../ui/components/textbox'
import './app.scss'


function Messages (props) {

	var messages = props.messages;
	var self = props.self;
	var regBadWords = /drugs|politics|wtf/gi;


	return (
		<main id="message-container">
			<ul>
				{messages.map(({id, student, text, createdAt}) =>
					<li className="chat-item" key={id}>

						<KidName name={student.name} self={self} />

						<label className="timestamp"> at {createdAt.toLocaleTimeString()} on {createdAt.toLocaleDateString()}</label>

						<KidMessage name={student.name} self={self} text={text.replace(regBadWords, "!@%#")}/>

					</li>
				)}
			</ul>
		</main>
	);
}

function KidName (props) {
	var name = props.name;
	var firstLetter = name.charAt(0).toUpperCase();

	if (name == props.self.name) {
		return <label className="student-name">{firstLetter}</label>;
	}
	else {
		return <label className="friend-name">{firstLetter}</label>;
	}

}


function KidMessage (props) {
	var name = props.name;
	var text = props.text;

	if (name == props.self.name) {
		return <p className="message">{text}</p>;
	}
	else {
		return <p className="friend-message">{text}</p>;
	}

}

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
				<h1>Kids Chatroom</h1>
			</header>

			<Member classroom={classroom}/>

			<main>
				<h2>Messages</h2>
				<Messages messages={chat.messages} self={classroom.self}/>
			</main>

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
