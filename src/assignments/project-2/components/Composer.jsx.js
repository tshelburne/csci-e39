import React, {Component} from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

import ReactEmojiSelector from 'react-emoji-selector'

function linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
}

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
    const {currentText: prevText, emojiPicker: emojiPicker} = this.state
    this.setState({
      currentText: prevText.concat(emoji.emoji),
      emojiPicker: !emojiPicker
    })
  }

	onSend(e) {
		if (e.type === `keyup` && e.key !== `Enter`) return

		const {chat} = this.props.actions
		const {currentText} = this.state
		if (!currentText.length) return

		chat.send(linkify(currentText))
		this.setState({currentText: ``})
	}

  showHideEmoji() {
    const emojiPicker = this.state.emojiPicker
    this.setState({emojiPicker: !emojiPicker})
  }

	render() {
    const {currentText, emojiPicker} = this.state
		const {chat, backgroundColor, borderColor, textColor, ...inputProps} = this.props
		return <section style={{borderColor: borderColor}}><input id="composer" value={currentText} onChange={this.onType} onKeyUp={this.onSend} />
      <button style={{backgroundColor: backgroundColor, color: textColor, borderColor: borderColor}} disabled={currentText === ``} onClick={this.onSend}>Send</button>
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
