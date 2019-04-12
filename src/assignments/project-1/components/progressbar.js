
import React, { Component } from 'react'


class ProgressBar extends Component {

	render() {

		return (
			<div>
				<label>{this.props.name}</label>
				<progress value={this.props.percentage} max="100">{this.props.percentage}%</progress>
			</div>
		);
	}
}

export default ProgressBar
