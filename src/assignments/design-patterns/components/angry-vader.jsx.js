import React from "react";
import PropTypes from "prop-types";
import Card from "./card.jsx.js";
import Button from "./custom-button.jsx.js";

const COOL_VADER_COLOR = "cyan";
const COOL_VADER_TEXT = "Cool Down";
class Vader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vaderColor: COOL_VADER_COLOR,
			vaderText: this.props.actionText
		};
	}

	render() {
		return (
			<Card color={this.state.vaderColor} title="**Heavy Breathing**">
				<img
					src="https://www.shareicon.net/data/128x128/2016/11/21/854776_darth_512x512.png"
					alt="Darth Vader"
					width="216"
					height="195"
				/>
				<Button
					color={this.props.buttonColor}
					text={this.state.vaderText}
					onClick={() => {
						if (this.state.vaderColor === this.props.vaderColor)
							this.setState({
								vaderColor: COOL_VADER_COLOR,
								vaderText: this.props.actionText
							});
						else
							this.setState({
								vaderColor: this.props.vaderColor,
								vaderText: COOL_VADER_TEXT
							});
					}}
				/>
			</Card>
		);
	}
}
export default Vader;
