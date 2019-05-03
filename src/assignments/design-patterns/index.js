import React from 'react'
import PropTypes from 'prop-types'
import Example, {ActiveCodeProvider} from './support/example'
import Section from './components/Section'
import Input from './components/Input'
import Signup from './components/Signup';
import './app.scss'


const PatternLibrary = () =>
	<ActiveCodeProvider>
		<div className="style-guide">
			<h1>Em's Pattern Library!</h1>


			<Example title="Section (H2 heading) <Section>">
				<Section title='H2 Heading' styleName='chat-members'></Section>
				<div className="just-testing"><p>This is a child paragraph.  The H2 is the default level - you don't need to pass a 'level' prop to get a H2.</p></div>
			</Example>

			<Example title="Section (H4 heading) <Section>">
				<Section title='H4 Heading' styleName='chat-members' headingLevel='4'></Section>
				<div className="just-testing"><p>This is a child paragraph.</p></div>
			</Example>

			<Example title="Numeric Input (Top Label) <Input>">
			<Input inputName="years" labelText="Years employed:" labelPosition="top" inputType="number" ></Input>
			</Example>

			<Example title="Text Input (Left Label) <Input>">
			<Input inputName="firstName" labelText="First Name:" labelPosition="left" inputType="text" ></Input>
			</Example>

			<Example title="Signup Form <Signup>">
			<Signup labelText="Get our weekly newsletter!" buttonText="Let's Go!" labelPosition="left"></Signup>
			</Example>
		</div>
	</ActiveCodeProvider>

export default PatternLibrary