import React from 'react'

export class Number extends React.Component {
	render() {
		return <p className="trash">{this.props.text}</p>;
	}
}