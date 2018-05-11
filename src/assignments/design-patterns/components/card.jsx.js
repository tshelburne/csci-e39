import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card" style={{ backgroundColor: this.props.color }}>
				{this.props.title && (
					<h2 className="card-title">{this.props.title}</h2>
				)}
				<br />
				{this.props.children}
			</div>
		);
	}
}

Card.propTypes = {};

export default Card;
