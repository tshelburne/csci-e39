import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Member from '../../ui/components/member'
import Textbox from '../../ui/components/textbox'
import './app.scss'
import InitialBlock from "../../ui/components/intial_block";


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
						<KidFullName name={student.name} self={self}/>

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

	if (name == props.self.name) {
		return <InitialBlock name={name} cn="student-name" />
	}
	else {
		return <InitialBlock name={name} cn="friend-name" />
	}

}

function KidFullName (props) {
    var name = props.name;

    if (name == props.self.name) {
        return <label className="student-fullname">{name}</label>;
    }
    else {
        return <label className="friend-fullname">{name}</label>;
    }

}


function KidMessage (props) {
	var name = props.name;
	var text = props.text;

	if (name == props.self.name) {
		return <p className="message"><span>{text}</span></p>;
	}
	else {
		return <p className="friend-message"><span>{text}</span></p>;
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
				<img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49181/preview.svg" class="kids-images" alt="crayon" />
				<h1>Kids Chatroom</h1>
				<img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49181/preview.svg" class="kids-images" alt="crayon" />
			</header>

			<Member classroom={classroom}/>

			<main>
				<h2>Messages</h2>
				<Messages messages={chat.messages} self={classroom.self}/>
			</main>

			<aside>
				<img src="https://s3.envato.com/files/253842432/Preview_Screenshots/160x600.jpg" data-alt="Kids Advertisement" data-title="fake-ad" />
			</aside>

			<Textbox chat={chat} actions={actions}/>
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
