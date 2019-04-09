
import React, { Component } from 'react'

class ProgressBar extends Component {

	render() {
		const {data} = this.props;
	}

	return (
		<div>
			<label>{data.name}</label>
			<progress value={data.percentage} max="100">{data.percentage}%</progress>
		</div>

	);

}

export default ProgressBar
