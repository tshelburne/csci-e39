import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Composer extends React.Component {

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

	render() {
    const {currentText} = this.state
		const {chat, ...inputProps} = this.props
		return <section><input value={currentText} onChange={this.onType} onKeyUp={this.onSend} />
      <button disabled={currentText === ``} onClick={this.onSend}>Send</button>
    </section>
	}

}

Composer.propTypes = {
}


export default Composer
