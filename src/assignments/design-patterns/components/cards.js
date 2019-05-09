import React from 'react'
import PropTypes from 'prop-types'

import Button from './buttons'


const Card = ({title, children, ...props}) => {
	return <div {...props} className="card">
		<h3 className="card--title">{title}</h3>
		<div className="card--content">
			{children}
		</div>
	</div>
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
}

export class StatefulCard extends React.Component {

	constructor(props){
		super(props)
		this.state =  { showImage: true }
	}

	render(){
		const {showImage} = this.state
		let buttonText = showImage ? "Hide Image" : "Show Image"
		return (
			<div {...this.props} className="card">
				<h3 className="card--title">{this.props.title}</h3>
				<div className="card--content">
					{showImage && this.props.children}
				</div>
				<Button onClick={()=> this.setState({showImage: !showImage}) }>
					<span className="just-testing">{buttonText}</span>
				</Button>
		</div>
		)
	}
}



export default Card