import React from 'react'

function ChangeView () {
    var element = document.getElementById("album");
    element.classList.toggle("album-inline");
}

export class ViewChange extends React.Component {
		render() {
			return <button className="view" onClick={ChangeView}>{this.props.text}</button>;
		}
	}