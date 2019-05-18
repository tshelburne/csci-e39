import React from 'react'
import PropTypes from 'prop-types'
import Example, {ActiveCodeProvider} from './support/example'
import Greeting from './greeting'
import Button from './button'
import Timer from './timer'
import TodoList from './list'

import './app.scss'

const PatternLibrary = () =>
	<ActiveCodeProvider>
		<div className="style-guide font">
			
			<h1 className="header"> The Totally 80s Retro Pattern Library!</h1>



			<Example title="My Totally Rad Greeting: ">
			<Greeting name="Jordan">
			<h2>You look Totally Awesome Today 😍 </h2>
			</Greeting>
			</Example>


			<Example title="My Button < #Muscles 💪 >">
				<Button/>
			</Example>

			<Example title= "Count it Down ... 3, 2, 1 🚀">
				<Timer startCount='1000'/>
			</Example>

			<Example title= "My Awesome Todo List ✔️">
				<TodoList/>
			</Example>
		
		</div>

		

	</ActiveCodeProvider>

export default PatternLibrary