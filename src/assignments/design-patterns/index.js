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
				<div className="just-testing"><p>Section with a configurable heading.  Takes children.</p>
				<ul>Props:
					<li>Title [string, required]</li>
					<li>Heading Level [string], values ('2', '3', '4', '5', '6'), default = 2</li>
				</ul>
				</div>
			</Example>

			<Example title="Section (H4 heading) <Section>">
				<Section title='H4 Heading' styleName='chat-members' headingLevel='4'></Section>
				<div className="just-testing"><p>Section with H4 example</p></div>
			</Example>

			<Example title="Numeric Input (Top Label) <Input>">
			<Input inputName="years" labelText="Years employed:" labelPosition="top" inputType="number" ></Input>
			<div className="just-testing"><p>Configurable input. Does not accept children.</p>
				<ul>Props:
					<li>
					InputName:  Name of the input to associate the label For attribute [string, required]
					</li>
					<li>
					labelText:  Text value of the label.  [string, required]
					</li>
					<li>
					labelPosition:  values ('top', 'left'), default = 'top'
					</li>
					<li>
					inputType:  values ('text', 'number', 'email'), default = 'text'
					</li>
				</ul>
				</div>
			</Example>

			<Example title="Text Input (Left Label) <Input>">
			<Input inputName="firstName" labelText="First Name:" labelPosition="left" inputType="text" ></Input>
			<div className="just-testing"><p>Another example of the input.</p></div>
			</Example>

			<Example title="Signup Form <Signup>">
			<Signup labelText="Get our weekly newsletter!" buttonText="Let's Go!" labelPosition="left"></Signup>
			<div className="just-testing"><p>Email signup form. Does not accept children.  Uses the Input Component</p>
				<ul>Props:
					<li>
					buttonText: [string], default = 'Sign up!',
					</li>
					<li>
					labelPosition: values ('top', 'left)', default = 'top'
					</li>
					<li>
					labelText: [string], default="Signup for our newsletter!"					
					</li>
				</ul>
				</div>
			</Example>
		</div>
	</ActiveCodeProvider>

export default PatternLibrary