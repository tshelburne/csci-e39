import React from 'react'
import TodoItems from './todoitems'


class TodoList extends React.Component {

constructor(props) {
super(props);

this.state = {

	items: []
};

this.addItem = this.addItem.bind(this);

}

addItem(e) {
	if ( this._inputElement.value !== ""){
		var newItem = {
			text: this._inputElement.value, 
			key: Date.now()

	};

this.setState((prevState) => {

	return{
		items: prevState.items.concat(newItem)
	};
});

}

this._inputElement.value = "";

e.preventDefault();

}


render() {

return (

<div className="todoList">
<div className="header">
<form onSubmit={this.addItem}>
<input ref={(a) => this._inputElement = a} 
	placeholder  ="enter text">
</input>
<button type="submit" > Send it! </button>
</form>
</div>
<TodoItems entries={this.state.items}/>
</div>


	);


}

}




export default TodoList