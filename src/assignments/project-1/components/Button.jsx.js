import React from 'react'

export class Button extends React.Component {
	render() {
		return <label className="btn" htmlFor="file">{this.props.text}</label>;
	}
}