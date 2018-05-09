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
				<PhoneInput phoneType="Home"/>
				<PhoneInput phoneType="Work"/>
				<PhoneInput phoneType="Cell"/>
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

				<Example title="<FormInput />">
					<PhoneInput phoneType="Home"/>
					<AddressInput addressLabel="Street Address"/>
				</Example>				

				<Example title="<MyForm />">
					<MyForm>
						<PhoneInput phoneType="Cell"/>
						<AddressInput addressLabel="Street Address"/>
					</MyForm>
				</Example>

				<Example title="<MyModal />">
					<MyModal title="Modal Title" body="" footer=""/>
				</Example>

				<Example title="Sample Modal">
					<MyModal title="Edit Phone Numbers" body={this.getModalBody()} footer={this.getModalFooter()}/>
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