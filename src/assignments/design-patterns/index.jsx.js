import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import SVG from './components/SVG/SVG.jsx'
import Picture from './components/Picture/Picture.jsx'
import Button from './components/Button/Button.jsx'
import Card from './components/Card/Card.jsx'

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)

		this.state = {activeCode: `react`}
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		}
	}

	render() {
		return (
			<div className="style-guide">
				<h1 style={{textAlign: 'center', fontFamily:'Permanent Marker'}}>{"Joanna's Pattern Library!"}</h1>
				<h2 style={{textAlign: 'center'}}>{"Created for CSCI E-39 Spring Semester 2018"}</h2>
				
				<Example title="SVG Icon Set">
  				<SVG icon="close" color="mediumpurple" width="21" height="21"/>
  				<SVG icon="delete" color="deeppink" width="21" height="21"/>
  				<SVG icon="edit" color="aqua" width="21" height="21"/>
  				<SVG icon="add" color="deepskyblue" width="21" height="21"/>
  				<SVG icon="open" color="black" width="21" height="21"/>
  				<SVG icon="shut" color="coral" width="21" height="21"/>
				</Example>

				<Example title="Button Set">
  				<Button type="button--primary" onClick={() => alert('You clicked the primary button')}>
  				  Primary Button
  				</Button>
  				<Button type="button--primary button--primary--subtle" onClick={() => alert('You clicked the subtle primary button')}>
  					Subtle Primary Button
  				</Button>
  				<Button type="button--primary button--primary--disabled" onClick={() => alert('You clicked the disabled primary button')}>
  				  Disabled Primary Button
  				</Button>  				
  				<Button type="button--secondary" onClick={() => alert('You clicked the secondary button')}>
  					 Secondary Button
          </Button>  				
  				<Button type="button--secondary button--secondary--subtle" onClick={() => alert('You clicked the subtle secondary button')}>
  				  Subtle Secondary Button
  				</Button>
  				<Button type="button--secondary button--secondary--disabled" onClick={() => alert('You clicked the disabled secondary button')}>
  				  Disabled Secondary Button
  				</Button>
				</Example>
				
				<Example title="Card">
					<Card title="Card Title" subtitle="Card Subtitle" text="Card contextual text">
					</Card>
				</Example>

				<Example title="Picture">
					<Picture url="https://loremflickr.com/320/240" caption="Checkout this cool photo!" captionAlign="center" width="50%"/>
				</Example>
				
				<Example title="Combining Elements to create a Component">
					<Card title="Worlds Best Photo" subtitle="I love this picture!" text="This is the best picture on the internet. I know because I've read the entire internet. I hope you like it too.">
				    <Picture url="https://loremflickr.com/320/240" caption="It's impossible not to love this random picture from LoremFlickr.com" captionAlign="left" width="100%"/>
				    <Button type="button--secondary button--secondary" onClick={() => alert('You added a great photo to your library.')}>
					    <SVG icon="add" color="black" width="21" height="21"/>
  				    Add to My Library
            </Button>
					  <Button type="button--secondary button--secondary--disabled" onClick={() => alert('You are not allowed to delete this truly great photo. But you can refresh the page and get a different one.')}>
					    <SVG icon="delete" color="black" width="21" height="21"/>
  				    Delete Forever
            </Button>
					</Card>
				</Example>
			</div>
		)
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary