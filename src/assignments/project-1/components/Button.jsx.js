import React from 'react'

export class Button extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {txt: "choose images"};
	// }
	// handleResize() {
	// 	this.setState({
	// 		txt = {window.innerWidth > 768 ? "choose images" : "+"}
	// 	});	
	// }
	// componentDidMount() {
	// 	window.addEventListener('resize', this.handleResize)
	// }
	// componentWillUnmount() {
	// 	window.removeEventListener('resize', this.handleResize)
	// }
	render() {
		return <label className="btn" htmlFor="file">{this.props.txt}</label>
		
	}
}