import React from 'react'
import PropTypes from './support/prop-types'
import autobind from 'class-autobind'
import List from './components/List.jsx'
import Member from './components/Member.jsx'
import Composer from './components/Composer.jsx'
import Header from './components/header.jsx'
import Ad from './components/ad.jsx'
import Color from 'color'



class Chat extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)

		this.state = {
			colors: {
				bgColor: "#000000",
				textColor: "#01FF70",
				wallColor: "#0000FF",
			}
		}
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

	updateColors(param, t) {
		const color = t.target.value;
		const {colors} = this.state;
		switch(param) {
			case "bg":
				colors.bgColor = color;
				this.setState({colors});
				break;
			case "text":
				colors.textColor = color;
				this.setState({colors});
				break;
			case "wall":
				colors.wallColor = color;
				this.setState({colors});
				break;
		}
	}

	render() {
		const {classroom, chat, actions} = this.props
		const {colors} = this.state;
		const {bgColor, textColor, wallColor} = colors
		const borderColor = Color(textColor).lighten(0.42);
		const randomGraphic = "https://picsum.photos/300/200/?image=";
		const randomLink = "http://www.uroulette.com/visit/wvvvv";

		return <main style={{backgroundColor: bgColor, color: textColor}}>
			<Header title="Chatroom" borderColor={borderColor} colors={colors} onChange={this.updateColors}  />
 			<aside id="memberlist" style={{borderColor: borderColor}}>
					<h2>Members</h2>
					<List>
						{classroom.students.map((student, index) =>
							<Member id={student.id} key={student.id} name={student.name}></Member>
						)}
					</List>
					</aside>

			<section id="messages" style={{backgroundColor: wallColor, borderColor: borderColor}}>
					<h2>Messages</h2>
					<ul>
						{chat.messages.map(({id, student, text, createdAt}) =>
							<li key={id}>
								<label>{student.name} at {createdAt.toISOString()}</label>
								<p style={{backgroundColor: textColor}}>{text}</p>
							</li>
						)}
					</ul>
			</section>
			<section id="typing" style={{borderColor: borderColor}}>
			  <Composer chat={chat} actions={this.props.actions} borderColor={borderColor} textColor={textColor} backgroundColor={bgColor} members={classroom}/>
			</section>
			<footer style={{borderColor: borderColor}}>
			  <h3>Sponsored by our partners:</h3>
			  <Ad graphic={randomGraphic + Math.floor(Math.random() * 20) } buttonLink={randomLink} borderColor={borderColor} textColor={textColor}/>
			  <Ad graphic={randomGraphic + Math.floor(Math.random() * 20) } buttonLink={randomLink} borderColor={borderColor} textColor={textColor}/>
			</footer>
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
