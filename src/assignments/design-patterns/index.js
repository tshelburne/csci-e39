import React from 'react'
import PropTypes from 'prop-types'
import Example, {ActiveCodeProvider} from './support/example'
import {Success, Warning, Info} from './components/Alert'
import ListBlock from './components/ListBlock'

import './app.scss'

const PatternLibrary = () =>
	<ActiveCodeProvider>
		<div className="style-guide">
			<h1>My Pattern Library!</h1>

			<Example title="<Alert>">
				<Success>
					This is a success alert. Use this when you want to convey that
					a user was successful in some action that they took.
				</Success>
				<Warning>
					This is a warning alert. Use this when you want to convey that
					a user either failed or was not allowed to perform a certain
					action, or that something bad will happen if they continue with
					some action.
				</Warning>
				<Info>
					This is an info alert. Use this when you want to notify a user
					about some information that they might need to successfully
					complete a task, achieve a goal, or use a product.
				</Info>
			</Example>

			<Example title="<ListBlock>">
				<ListBlock>
					<p>
						A ListBlock makes it easy to create a nice list out of any
						elements
					</p>
					<Info>
						Anything can be a direct child of a ListBlock!
					</Info>
					<ListBlock>
						<Success>
							Even another ListBlock!
						</Success>
						<span>Isn't that cool?</span>
					</ListBlock>
				</ListBlock>
			</Example>
		</div>
	</ActiveCodeProvider>

export default PatternLibrary
