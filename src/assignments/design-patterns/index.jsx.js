import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import PictureListItem, {PictureListItemExamples} from './components/pictureListItem.jsx'
import Profile, {BioProfile, ProfilesExamples} from './components/profiles.jsx'
import ToggleButton, {OnOffButton} from './components/toggleButtons.jsx'
import BioProfileList from './components/bioProfileList.jsx'


class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)

		this.state = {activeCode: `react`,
			buttonState: false, 
			bioButtonState: true,
		}
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		}
	}

	// name of state is stored in DOM data-buttonState attribute
	setButtonState(event) {
		let change = {}

		if (event.target.getAttribute('aria-pressed') == "true") {
			change[event.target.getAttribute('data-buttonState')] = false
		}
		else {
			change[event.target.getAttribute('data-buttonState')] = true
		}

		this.setState(change)
	}

	render() {
		return (
			<div className="style-guide">
				<h1>My Pattern Library!</h1>

				<Example title="On/Off Toggle Button">
					<OnOffButton 
							ariaPressed={this.state.buttonState}
							dataButtonState="buttonState"
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
					<Profile profile={ProfilesExamples[0]} />
				</Example>

				<Example title="Profile with Bio">
					<BioProfile profile={ProfilesExamples[1]} />
				</Example>

				<Example title="Bio Profile List">
					<ToggleButton 
							ariaPressed={this.state.bioButtonState}
							dataButtonState="bioButtonState"
							labelText="Profile Bios"
							onClick={this.setButtonState.bind(this)} 
							toggleOff="2">
						<span>Show</span>
						<span>Hide</span>
					</ToggleButton>
					<BioProfileList bioProfileList={ProfilesExamples} showHideBio={this.state.bioButtonState} />
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