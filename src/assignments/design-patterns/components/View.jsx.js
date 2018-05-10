import React from 'react'
import {SmallButton} from './Button.jsx'
import {Gallery} from './Gallery.jsx'

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
	}
	render() {
			return (
				<section className="view">
					<SmallButton
						onClick={this.handleClick}
						lable={this.state.btnGrid ? 'TO GRID' : 'TO LINE'} />
					<Gallery title={this.props.title} extraClass={this.state.btnGrid ? 'line': null} />
				</section>
			);
		}
}