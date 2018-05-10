import React from 'react';


class Button extends React.Component {
	render() {
		return <a className={`button ${this.props.extraClass}`} onClick={this.props.onClick}>{this.props.lable}</a>
	}
}

export class SmallButton extends React.Component {
	render() {
		return <Button lable={this.props.lable} onClick={this.props.onClick} extraClass="small" />
	}
}

export class MiddleButton extends React.Component {
	render() {
		return <Button lable={this.props.lable} onClick={this.props.onClick} extraClass="middle" />
	}
}

export class LargeButton extends React.Component {
	render() {
		return <Button lable={this.props.lable} onClick={this.props.onClick} extraClass="large" />
	}
}