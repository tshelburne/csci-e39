import React from 'react';


class Chatbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  currentText:''   }

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
    const { chat,  auth, classroom, uploads, registration, currentText } = this.props;

    return (
      <div className="chatbox-container">
			<h1>Chatroom</h1>
        <div> This is from a Chatbox component
        </div>

        <div className="members-container">
	       <h2>Members</h2>
        </div>
          <div className="messages-container">
	         <h2>Messages</h2>
           <ul>
             {chat.messages.map(({id, student, text, createdAt}) =>
               <li key={id}>
                 <label>{student.name} at {createdAt.toISOString()}</label>
                 <p>{text}</p>
               </li>
             )}
           </ul>
        </div >
        <div> TextBox
          <input value={currentText} onChange={this.onType} onKeyUp={this.onSend} />
          <button disabled={currentText === ``} onClick={this.onSend}>Send</button>
          <p>{this.getTypingMessage()}</p>

        </div>


        <div className="uploader-container">
            <h2>Uploader </h2>
        </div>
      </div>

    )
  }


}


export default Chatbox;
