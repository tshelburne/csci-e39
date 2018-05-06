import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import PictureListItem, {PictureListItemExamples} from './components/pictureListItem.jsx'
import Profile, {BioProfile, ProfilesExamples} from './components/profiles.jsx'

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

				<Example title="My Special <div>">
					<div className="just-testing">HELLO DIV</div>
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