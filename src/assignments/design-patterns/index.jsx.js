import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import {SmallButton, MiddleButton, LargeButton} from './components/Button.jsx'
import {ViewChange} from './components/View.jsx'
import {Pic} from './components/Picture.jsx'
import {Gallery} from './components/Gallery.jsx'

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
				<h1>Ping Ji&rsquo;s Pattern Library!</h1>			

				<Example title="My Special <Button>">
					<SmallButton lable="small" onClick={() => alert(`this is Small button`)} />
					<MiddleButton lable="middle" onClick={() => alert(`this is Middle button`)} />
					<LargeButton lable="large" onClick={() => alert(`this is Large button`)} />
				</Example>

				<Example title="My Special <Pic>">
					<Pic url="https://www.wellesley.edu/sites/default/files/styles/news_0_image/public/assets/dailyshot/_39b9251_1.jpg" alt="Wellesley Storm" caption="Winter Wonderland at Wellesley College" />
				</Example>

				<Example title="My Special <Gallery>">
					<Gallery title="Gallery of Wellesley College's dailyshot" />
				</Example>	

				<Example title="My Special <ViewChange>">
					<ViewChange title="View Toggle"/>
				</Example>

				<Example title="My Special <div>">
					<div className="just-testing">HELLO DIV</div>
				</Example>
				
				<Example title="My Special <span>">
					<span className="just-testing">HELLO SPAN</span>
				</Example>

				<Example title="My Special <h4>">
					<h4 className="just-testing">HELLO HEADING</h4>
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