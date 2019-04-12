import React, { Component } from 'react'


class About extends Component {

	constructor(props) {
	    super(props);
	    this.state = {showDetails: false};
	  }

	toggleDetails() {
		this.setState({showDetails: !this.state.showDetails})
	}

	render() {
		const buttonText = this.state.showDetails ?  "Hide Details" : "What is this site?";
		const {showDetails} = this.state

		return (
			<section class="about">
			<button onClick={this.toggleDetails.bind(this)}>{buttonText}</button>

			<div class="details">
				{showDetails &&
					<div>
				<h2>About the Bauhaus Postcard Photo Album</h2>
				<p>Inspired by a visit to <a href="https://www.harvardartmuseums.org/visit/exhibitions/5615/the-bauhaus-and-harvard">the Bauhaus and Harvard Exhibit at Harvard Art Museums.</a>
				To create a postcard, visit the <a href="http://emilyc-b.com:8084/">draft postcard generator.</a></p></div>}
				</div>
			</section>
		);
	}
}

export default About
