import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

import './app.scss'

const Layout = ({children}) => (
	<div className="layout-grid">
		{oneByType(children, Layout.Header)}
		{oneByType(children, Layout.Content)}
		{oneByType(children, Layout.Sidebar)}
		{oneByType(children, Layout.Footer)}
	</div>
)

Layout.Header = ({title, children}) => (
	<header className="layout--header">
		<h1 className="main-heading">{title}</h1>
		{children}
	</header>
)

Layout.Content = ({title, children}) => (
	<main className="layout--main">
		{title && <h2 className="heading">{title}</h2>}
		<div className="main-content">
			{children}
		</div>
	</main>
)

Layout.Sidebar = ({title, children}) => (
	<aside className="layout--sidebar">
		{title && <h2 className="heading">{title}</h2>}
		{children}
	</aside>
)

Layout.Footer = ({children}) => (
	<footer className="layout--footer">
		{children}
	</footer>
)

function oneByType(children, type) {
	return React.Children.toArray(children).find((child) => child.type === type)
}

// COMPONENTS

const Img = ({children, title, src, description }) => (
	<figure className="polaroid">
		<img src={src}  alt={description ? description : title}/>
		{description && <figcaption className="polaroid-caption">{description}</figcaption>}
		{children}
	</figure>
);

const ItemCard = ({children, title, src, description }) => (
	<div>
		<Img title={title} src={src} description={description}/>
		{children}
	</div>
);

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

		return (
		
		<Layout>
			<Layout.Header title="I am a nav - please style me differently" />
			<Layout.Content title="I am main content">
				
				<ItemCard
					title={"name"}
					src={"url"}
					description={"some content about a student"}
				/>
			
			</Layout.Content>
			
			<Layout.Sidebar title="I am a Sidebar">
				<ul className="item-list">
					<li>I am in the sidebar  </li>
				</ul>
			</Layout.Sidebar>
			<Layout.Footer>
				<p>I am the footer</p>
			</Layout.Footer>
		</Layout>
		)
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