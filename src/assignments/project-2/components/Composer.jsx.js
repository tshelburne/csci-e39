import React, {Component} from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

import ReactEmojiSelector from 'react-emoji-selector'

class Composer extends Component {

	constructor() {
		super(...arguments)
		autobind(this)

    this.state = {currentText: ``, emojiPicker: false}
	}

  onType(e) {
		const {chat} = this.props.actions
		const {currentText: prevText} = this.state
		const currentText = e.target.value

		if (!currentText.length) chat.stopTyping()
		if (currentText.length === 1 && !prevText.length) chat.startTyping()

		this.setState({currentText})
	}

  selectEmoji(emoji) {
    const {currentText: prevText} = this.state
    this.setState({currentText: prevText.concat(emoji.emoji)})
  }

	onSend(e) {
		if (e.type === `keyup` && e.key !== `Enter`) return

		const {chat} = this.props.actions
		const {currentText} = this.state
		if (!currentText.length) return

		chat.send(currentText)
		this.setState({currentText: ``})
	}

  showHideEmoji() {
    const emojiPicker = this.state.emojiPicker
    this.setState({emojiPicker: !emojiPicker})
  }

	render() {
    const {currentText, emojiPicker} = this.state
		const {chat, ...inputProps} = this.props
		return <section><input id="composer" value={currentText} onChange={this.onType} onKeyUp={this.onSend} />
      <button disabled={currentText === ``} onClick={this.onSend}>Send</button>
      <a onClick={this.showHideEmoji}>😁</a>
      {emojiPicker && <ReactEmojiSelector
                visibleAmount={10}
                searchPlaceholder='Search emoji'
                onSelect={(emoji) => this.selectEmoji(emoji)}/>}
    </section>
	}

}

Composer.propTypes = {
}


export default Composer
