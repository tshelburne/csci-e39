import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import ImageCard from './components/ImageCard.jsx'
import MemoryPair from "./components/MemoryPair.jsx";

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)

		let memoryPairExample = {isVisible: false}

		this.state = {activeCode: `react`, memoryPairExample}
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		}
	}

  onMemoryPairChange () {
		console.log('click')
		let memoryPairExample = this.state.memoryPairExample

		memoryPairExample.isVisible = !memoryPairExample.isVisible

		this.setState({ memoryPairExample })
	}

	render() {
		let memoryPairExample = { isVisible: false }
		return (
			<div className="style-guide">
				<h1>My Pattern Library!</h1>

        <Example title="<ImageCard>">
          	<ImageCard imgSrc="https://media2.giphy.com/media/3o7aCTNjq3qiUbzrHi/giphy-downsized.gif"
											 caption="And now I'm dead." />
        </Example>

				<Example title="<MemoryPair>">
          <div className="flex memory-pair-bounds">
						<MemoryPair onChange={this.onMemoryPairChange.bind(this)}
												isVisible={this.state.memoryPairExample.isVisible}
												isLocked={false} sibling={({})}
												imgSrc="https://media2.giphy.com/media/3o7aCTNjq3qiUbzrHi/giphy-downsized.gif"
												caption="And now I'm dead." />
					</div>
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
