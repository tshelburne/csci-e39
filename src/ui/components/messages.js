import React from 'react'

class Messages extends React.Component {

  // constructor() {
  //   super(...arguments)
  //   autobind(this)
  // }

	render() {
    const {messages, self, ...inputProps} = this.props;
    alert("messages"+ messages.length);
		return <main id="message-container">
  			<ul>
  				{messages.map(({id, student, text, createdAt}) =>
  					<li className="chat-item" key={id}>

  						<KidName name={student.name} self={self} />

  						<label className="timestamp"> at {createdAt.toISOString()}</label>

  						<KidMessage name={student.name} self={self} text={text}/>

  					</li>
  				)}
  			</ul>
  		</main>
	}

  // Messages (props) {
  //
  // 	var messages = props.messages;
  // 	var self = props.self;
  //
  // 	return (
  // 		<main id="message-container">
  // 			<ul>
  // 				{messages.map(({id, student, text, createdAt}) =>
  // 					<li className="chat-item" key={id}>
  //
  // 						<KidName name={student.name} self={self} />
  //
  // 						<label className="timestamp"> at {createdAt.toISOString()}</label>
  //
  // 						<KidMessage name={student.name} self={self} text={text}/>
  //
  // 					</li>
  // 				)}
  // 			</ul>
  // 		</main>
  // 	);
  // }

   KidName (name, self){
  	//var name = props.name;
  	var firstLetter = name.charAt(0).toUpperCase();

  	if (name == self.name) {
  		return <label className="student-name">{firstLetter}</label>;
  	}
  	else {
  		return <label className="friend-name">{firstLetter}</label>;
  	}

  }


   KidMessage (name, self, text) {
  	//var name = props.name;
  	//var text = props.text;

  	if (name == self.name) {
  		return <p className="message">{text}</p>;
  	}
  	else {
  		return <p className="friend-message">{text}</p>;
  	}

  }

}

export default Messages
