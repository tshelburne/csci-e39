import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import MyModal from './components/MyModal.jsx'
import {MyForm, FormInput} from './components/MyForm.jsx'


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

	getModalBody() {
		return (
			<MyForm>
				<FormInput FormLabel="Home Phone" placeholder="home phone" />
				<FormInput FormLabel="Work Phone" placeholder="work phone" />
				<FormInput FormLabel="Cell Phone" placeholder="cell phone" />
			</MyForm>
		)
	}

	render() {
		return (
			<div className="style-guide">
				<h1>My Pattern Library!</h1>

				<Example title="My Special <div>">
					<div className="just-testing">HELLO DIV</div>
				</Example>
				
				<Example title="My Special <span>">
					<span className="just-testing">HELLO SPAN</span>
				</Example>

				<Example title="My Special <h4>">
					<h4 className="just-testing">HELLO HEADING</h4>
				</Example>

				<Example title="<MyModal />">
					<MyModal title="Modal Title" body="Body Content" footer="Footer Content"/>
				</Example>

				<Example title="<FormInput />">
					<FormInput FormLabel="Home Phone" placeholder="phone number" />
				</Example>			

				<Example title="<MyForm />">
					<MyForm>
						<FormInput FormLabel="Home Phone" placeholder="home phone" />
						<FormInput FormLabel="Work Phone" placeholder="work phone" />
						<FormInput FormLabel="Cell Phone" placeholder="cell phone" />
					</MyForm>
				</Example>


				<Example title="Sample Modal">
					<MyModal title="Manage Phone Numbers" body={this.getModalBody()} footer="Footer Content"/>
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