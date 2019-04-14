import React, { Component } from 'react'
import './header.scss'

export default class Header extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const {title} = this.props;
		return (
			<div className = "header">
				<img className = "site-logo" src='http://icons.iconarchive.com/icons/limav/game-of-thrones/256/Stark-icon.png' alt='Logo'></img>
				<h1 className= "site-title">{title}</h1>
			</div>
		)
	}
}