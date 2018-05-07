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
		);
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
};

export default PatternLibrary;
