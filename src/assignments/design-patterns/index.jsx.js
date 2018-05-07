import React from 'react';
import PropTypes from 'prop-types';
import Example from './support/example.jsx';

import {
	PrimaryButton,
	SecondaryButton,
	SuccessButton,
	DangerButton,
	WarningButton,
	InfoButton,
	LightButton,
	DarkButton,
	LinkButton,
} from './components/button/button.jsx';

import { DefaultHeader } from './components/header/header.jsx';

import { DefaultNav } from './components/nav/nav.jsx';

import { DefaultAction } from './components/action/action.jsx';

class PatternLibrary extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = { activeCode: `react` };
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({ activeCode }),
		};
	}

	render() {
		return (
			<div className="style-guide">
				<h1>Jay's Little Pattern Library!</h1>

				<Example title="My Special <button>">
					<PrimaryButton label="Click for Primary" onClick={() => alert('Primary')} />
					<SecondaryButton label="Click for Secondary" onClick={() => alert('Secondary')} />
					<SuccessButton label="Click for Success" onClick={() => alert('Success')} />
					<DangerButton label="Click for Danger" onClick={() => alert('Danger')} />
					<WarningButton label="Click for Warning" onClick={() => alert('Warning')} />
					<InfoButton label="Click for Info" onClick={() => alert('Info')} />
					<LightButton label="Click for Light" onClick={() => alert('Light')} />
					<DarkButton label="Click for Dark" onClick={() => alert('Dark')} />
					<LinkButton label="Click for Link" onClick={() => alert('Link')} />
				</Example>
				<Example title="My Special <header>">
					<DefaultHeader title="Light Theme" extraClass="lightTheme" />
					<DefaultHeader title="Dark Theme" extraClass="darkTheme" />
					<DefaultHeader
						title="Light Theme with CTA"
						ctaClass="subtle"
						action="Download"
						extraClass="lightTheme"
					/>
				</Example>

				<Example title="My Special <nav>">
					<DefaultNav extraClass="lightTheme" />
					<DefaultNav extraClass="darkTheme" />
				</Example>

				<Example title="My Special Call to Action">
					<DefaultAction ctaClass="subtle" action="Download" />
					<DefaultAction ctaClass="refined" action="Interested?" />
					<DefaultAction ctaClass="artless" action="SAVE MONEY" />
				</Example>
			</div>
		);
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
};

export default PatternLibrary;
