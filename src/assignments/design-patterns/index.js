import React from 'react'
import PropTypes from 'prop-types'
import Example, {ActiveCodeProvider} from './support/example'
import {Success, Warning, Info} from './components/Alert'
import ListBlock from './components/ListBlock'
import ColorMapper from './components/ColorMapper'

import './app.scss'

const PatternLibrary = () =>
	<ActiveCodeProvider>
		<div className="style-guide">
			<h1>Adam's Pattern Library!</h1>

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
						<li>Or just a regular li.</li>
					</ListBlock>
				</ListBlock>
			</Example>

			<Example title="<ColorMapper>">
				<ColorMapper colors="red blue green">
					<span>Map a list of colors</span>
					<span>to a group</span>
					<span>of elements!</span>
				</ColorMapper>
				<ColorMapper colors="purple orange">
					<span>There can even</span>
					<p>be more elements</p>
					<span>than colors.</span>
				</ColorMapper>
			</Example>
		</div>
	</ActiveCodeProvider>

export default PatternLibrary
