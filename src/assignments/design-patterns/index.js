import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import ArticleWithoutImage from './article'
import ArticleWithImage from './article'
import Fig from './figure'
import Footer from './footer'
import Header from './header'

import './app.scss'

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
				<h1>My Pattern Library!</h1>

				<Example title="Header/Footer Component">
				  <Header text="The Page Header - stays on the top of the page" />
					<Footer text="The Page Footer - lies on the bottom of the page." />
				</Example>

				<Example title="Figure component for Images">
					<Fig imgUrl="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg"
					alt="altText" imgCaption="caption" />
				</Example>

				<Example title="Article Component For Paragraph">
				   	<ArticleWithoutImage para="Sit amet dictum sit amet. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Hac habitasse platea dictumst quisque sagittis purus. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Dolor sed viverra ipsum nunc aliquet bibendum. Rhoncus aenean vel elit scelerisque mauris pellentesque. Fermentum dui faucibus in ornare quam viverra. Massa enim nec dui nunc mattis enim ut. Dictum at tempor commodo ullamcorper. Tortor vitae purus faucibus ornare suspendisse sed. Convallis convallis tellus id interdum velit laoreet id donec." />
					</Example>

					<Example title="Article Component With Image and Paragraph">
							<ArticleWithImage para="Sit amet dictum sit amet. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Hac habitasse platea dictumst quisque sagittis purus. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Dolor sed viverra ipsum nunc aliquet bibendum. Rhoncus aenean vel elit scelerisque mauris pellentesque. Fermentum dui faucibus in ornare quam viverra. Massa enim nec dui nunc mattis enim ut. Dictum at tempor commodo ullamcorper. Tortor vitae purus faucibus ornare suspendisse sed. Convallis convallis tellus id interdum velit laoreet id donec."
							imgUrl="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg" alt="altText" imgCaption="caption"
							/>
					</Example>

				 <Example title="Article with Image, Header and Footer">
				  <Header text="The Page Header - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Enim lobortis scelerisque fermentum dui. Orci nulla pellentesque dignissim enim sit amet venenatis urna." />
				 	<ArticleWithImage
					para=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					imgUrl="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg" alt="altText" imgCaption="caption"/>
          <Footer text="Page Footer - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. " />
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
