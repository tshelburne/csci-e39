import React from 'react'

export class ViewChange extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {btnGrid: true};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			btnGrid: !prevState.btnGrid
		}));
		document.getElementById("album").classList.toggle("album-inline");
	}
	render() {
			return (
				<button className="view" onClick={this.handleClick}>
					{this.state.btnGrid ? 'grid' : 'line'}
				</button>
			);
		}
}