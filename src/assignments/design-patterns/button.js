import React from 'react'



class Button extends React.Component {

constructor (){
super();
this.state ={

	text:""
};

}

clicked(text){
	this.setState ({text: text});

}


render() {
console.log('action!')

return (
	
	<div className="header">

	<button onClick={ (e) => {this.clicked(" { display: flex; }");}}> #Muscles </button>

		{this.state.text}

	</div>

	)

}

}


export default Button