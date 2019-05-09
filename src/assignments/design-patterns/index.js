import React from 'react'
import PropTypes from 'prop-types'
import Example, {ActiveCodeProvider} from './support/example'
import Nav from './components/nav'
import Section from './components/section'
import Footer from './components/footer'
import Button,{ConfirmButton, CancelButton} from './components/buttons'
import Img, {ImgFigure} from './components/images'
import Card, {StatefulCard} from './components/cards'

import './app.scss'

const PatternLibrary = () =>
	<ActiveCodeProvider>
		<div className="style-guide">
			<h1>Francis' Pattern Library!</h1>

			<Example title="<Nav>">
				<Nav title="Nav Title">
					<span className="just-testing">Menu</span>
				</Nav>
			</Example>

			<Example title="<Button>">
				<Button>
					<span className="just-testing">Button information</span>
				</Button>
				<Button primary>Success Button</Button>
				<Button block secondary>Failure Button</Button>
			</Example>

			<Example title="<Img>">
				<Img title="Image Title" src="http://via.placeholder.com/120x160">
					<div className="just-testing">Image information</div>
				</Img>
			</Example>

			<Example title="<Card>">
				<Card title="Card Title">
					<div className="just-testing">Card information</div>
				</Card>
			</Example>

			<Example title="<StatefulCard>">
				<StatefulCard title="Card Title">
					<ImgFigure title="Image Title"
						 src="http://via.placeholder.com/120x160"
						 description="Image description">
						<div className="just-testing"></div>
					</ImgFigure>
					<div className="just-testing">StatefulCard information</div>
				</StatefulCard>
			</Example>

			<Example title="<Section>">
				<Section title="Section Title">
					<div>Section</div>
					<Button> Am a button </Button>
					<ConfirmButton> Am a confirm button</ConfirmButton>
					<CancelButton> Am a cancel button</CancelButton>
				</Section>
			</Example>

			<Example title="<Footer>">
				<Footer title="Footer Title">
					<span className="just-testing">Copyright information</span>
				</Footer>
			</Example>
		</div>
	</ActiveCodeProvider>

export default PatternLibrary