import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import MyModal from './components/MyModal.jsx'
import {MyForm, PhoneInput, AddressInput} from './components/MyForm.jsx'


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
				<PhoneInput PhoneType="Home"/>
				<PhoneInput PhoneType="Work"/>
				<PhoneInput PhoneType="Cell"/>
			</MyForm>
		)
	}

	getModalFooter() {
		return (
			<button>Save</button>
		)
	}

	render() {
		return (
			<div className="style-guide">
				<h1>My Pattern Library!</h1>

				<Example title="<MyModal />">
					<MyModal title="Modal Title" body="" footer=""/>
				</Example>

				<Example title="Form Inputs">
					<PhoneInput PhoneType="Home"/>
					<AddressInput AddressLabel="Street Address"/>
				</Example>				

				<Example title="<MyForm />">
					<MyForm>
						<PhoneInput PhoneType="Home"/>
						<AddressInput AddressLabel="Street Address"/>
					</MyForm>
				</Example>

				<Example title="Sample Modal">
					<MyModal title="Manage Phone Numbers" body={this.getModalBody()} footer={this.getModalFooter()}/>
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