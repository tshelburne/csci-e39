import React from 'react'
import autobind from "class-autobind";

class Textbox extends React.Component {

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
        console.log("reset current texts")
        this.setState({currentText: ``})
    }

    getTypingMessage() {

        const {typing} = this.props.chat;

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

        const {currentText} = this.state

        return <footer>
            <div class="chat-footer-grid">
            <input value={currentText} onChange={this.onType} onKeyUp={this.onSend} />
            <button disabled={currentText === ``} onClick={this.onSend}>Send</button>
            <p className="chat-text-typing">{this.getTypingMessage()}</p>
            </div>
        </footer>
    }
}

export default Textbox
