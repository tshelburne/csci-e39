import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'

import Ad from './components/ad.jsx'
import {GreenLinkCard, PinkLinkCard, Card} from './components/card.jsx'
import Button from './components/button.jsx'
import TemperatureInput from './components/inputTemp.jsx'

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
			<div className="style-guide-wrapper">
				<header>
					<h1>My Pattern Library!</h1>
				</header>

				<main>

					<Example title="Component which takes props">
						<div>
							<Ad siteUrl="https://www.lipsum.com/" 
								image="https://via.placeholder.com/200x200" 
								mobileImage="https://via.placeholder.com/150x150" 
								alt="ad image" 
								text="Click"/>
						</div>
					</Example>					
					
					<Example title="Component with multiple versions">
						<div>
							<GreenLinkCard url="https://www.nps.gov/ever/index.htm">
									   <h1>Everglades</h1>
									   <p>Everglades National Park protects an unparalleled landscape that provides 
									   important habitat for numerous rare and endangered species like the manatee,  American 
									   crocodile, and the elusive Florida panther.</p>
							</GreenLinkCard>
							<PinkLinkCard url="https://www.nps.gov/yose/index.htm"> 
									   <h1>Yosemite</h1>
									   <p>Not just a great valley, but a shrine to human foresight, the strength of 
									   granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra.</p>
							</PinkLinkCard>
						</div>
					</Example>

					<Example title="Combining components">
						<div>
							<Card image="https://via.placeholder.com/200x200"
								  alt=""
								  title="Title"
								  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
								  			  Sunt quibusdam, numquam accusantium minus eveniet provident 
								  			  aliquam voluptatibus asperiores consequuntur molestias ipsum. 
								  			  Deserunt dolore facere tempora facilis aspernatur quod amet dolores.">
								<Button>
									<TemperatureInput/>
								</Button>
							</Card>	
						</div>
					</Example>

				</main>
			</div>
		)
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary