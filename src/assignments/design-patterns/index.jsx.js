import React from "react";
import PropTypes from "prop-types";
import Example from "./support/example.jsx";
import Card from "./components/card.jsx.js";
import Button from "./components/custom-button.jsx.js";
import VaderBio from "./components/angry-vader.jsx.js";
class PatternLibrary extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = { activeCode: `react` };
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({ activeCode })
		};
	}

	render() {
		return (
			<div className="style-guide">
				<h1 className="style-guide-heading">My Pattern Library!</h1>

				<Example title="Angry Vader">
					<VaderBio
						buttonColor="crimson"
						vaderColor="red"
						actionText="Angry Me"
					/>
				</Example>

				<Example title="Pink Vader">
					<VaderBio vaderColor="pink" actionText="Silly Me" />
				</Example>

				<Example title="My buttons">
					<Button
						color="crimson"
						text="Crimson Button"
						onClick={() => {
							console.log("Clicked a button");
						}}
					/>
					<Button
						color="royalblue"
						text="Royalblue Button"
						onClick={() => {
							console.log("Clicked a button");
						}}
					/>
					<Button
						text="Default Button"
						onClick={() => {
							console.log("Clicked a button");
						}}
					/>
				</Example>

				<Example title="My Card">
					<Card title="Empty card with a title" />
					<Card
						title="Card with some text and color"
						color="goldenrod"
					>
						<p>
							This is just some random text. This is just some
							random text.This is just some random text.This is
							just some random text.This is just some random text.{" "}
						</p>
					</Card>
				</Example>
			</div>
		);
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func
};

export default PatternLibrary;
