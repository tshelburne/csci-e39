import React from 'react'

function ChangeView () {
    var element = document.getElementById("album");
    element.classList.toggle("album-inline");
}

export class ViewChange extends React.Component {
	// constructor () {
	// 	this.state = { grid: false }
	// }
	// setState (state) {
	// 	this.state = state
	// 	this.el = this.render()
	// }
	// changeViewText () {
	// 	this.setState({
	// 		grid: !this.state.grid
	// 	})
	// }
	// render () {
	// 	this.el = createDOMFromString(` 
	// 		<button class='view'>
	// 		<span class='like-text'>${this.state.grid ? 'grid' : 'line'}</span>
	// 		<span><!-- error --></span>
	// 		</button>
	// 		`)
	// 	this.el.addEventListener('click', this.changeViewText.bind(this), false)
	// 	return this.el
	// }
	render() {
			return <button className="view" onClick={ChangeView}>{this.props.text}</button>;
		}
}