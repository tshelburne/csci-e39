import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import ImageCard from './components/ImageCard.jsx'
import MemoryPair from "./components/MemoryPair.jsx";
import MemoryGrid from "./components/MemoryGrid.jsx";

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)

		let memoryPairExample = { isVisible: false }
		let sources = [
			{
				caption: 'now I\'m dead. - Curtis Wilcox',
				imgSrc: 'https://media2.giphy.com/media/3o7aCTNjq3qiUbzrHi/giphy-downsized.gif'
			},
      {
        caption: 'David Longo\'s Unicorn sticker',
        imgSrc: 'https://i.imgur.com/KVpnLrn.jpg'
      },
      {
        caption: 'The joys of coming back to work to help put out fires 😊 - Michael Regert',
        imgSrc: 'https://media0.giphy.com/media/l2QEgWxqxI2WJCXpC/giphy-downsized.gif'
      },
      {
        caption: 'rampage of coding glory - Tim',
        imgSrc: 'https://media2.giphy.com/media/tr9uJ9Om3aUZW/giphy-downsized.gif'
      },
      {
        caption: '(no comment) - Ashley Mulligan',
        imgSrc: 'https://media1.tenor.com/images/2738b8eeebb9469a9850ed9e94f119a7/tenor.gif?itemid=5727121'
      },
      {
        caption: '(no comment) - Natalya Shelburne',
        imgSrc: 'https://i.imgur.com/LUAcTr4.png'
      },
		]

		this.state = { activeCode: `react`, memoryPairExample, sources }
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		}
	}

  onMemoryPairChange () {
		let memoryPairExample = this.state.memoryPairExample

		memoryPairExample.isVisible = !memoryPairExample.isVisible

		this.setState({ memoryPairExample })
	}

	render() {
		let aspect = {
			minWidth: 'calc(888px / 4)',
			minHeight: `calc(${(4/3)* 892}px / 4)`
		}

		return (
			<div className="style-guide">
				<h1>My Pattern Library!</h1>

        <Example title="ImageCard">
          	<ImageCard imgSrc="https://media2.giphy.com/media/3o7aCTNjq3qiUbzrHi/giphy-downsized.gif"
											 caption="And now I'm dead." />
        </Example>

				<Example title="MemoryPair">
          <div className="flex memory-pair-bounds">
						<MemoryPair onChange={this.onMemoryPairChange.bind(this)}
												isVisible={this.state.memoryPairExample.isVisible}
												isLocked={false} sibling={({})}
												imgSrc="https://media2.giphy.com/media/3o7aCTNjq3qiUbzrHi/giphy-downsized.gif"
												caption="And now I'm dead." />
					</div>
				</Example>

				<Example title="MemoryGrid">
					<MemoryGrid x={4} y={3} sources={this.state.sources} aspect={aspect} />
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
