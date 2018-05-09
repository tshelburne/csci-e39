import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import PictureListItem, {PictureListItemExamples} from './components/pictureListItem.jsx'
import Profile, {BioProfile, ProfilesExamples} from './components/profiles.jsx'
import {OnOffButton} from './components/toggleButtons.jsx'

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)

		this.state = {activeCode: `react`,
			buttonState: true
		}
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		}
	}

	setButtonState() {
		this.setState({buttonState: !this.state.buttonState});
		console.log("click");
	}

	render() {
		return (
			<div className="style-guide">
				<h1>My Pattern Library!</h1>

				<Example title="On/Off Toggle Button">
					<OnOffButton 
							ariaPressed={this.state.buttonState}
							labelId="buttonStateExample" 
							labelText="Button State"
							onClick={this.setButtonState.bind(this)} 
							toggleOff="2">
						<span>on</span>
						<span>off</span>
					</OnOffButton>
				</Example>
				
				<Example title="PictureListItem">
					<PictureListItem file={PictureListItemExamples.one} />
				</Example>

				<Example title="CompletedFilesItem Error">
					<PictureListItem file={PictureListItemExamples.error} />
				</Example>

				<Example title="Profile">
					<Profile profile={ProfilesExamples.one} />
				</Example>

				<Example title="Profile with Bio">
					<BioProfile profile={ProfilesExamples.bio} />
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