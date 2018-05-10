import React from 'react'
import PropTypes from 'prop-types'
import Pattern from './support/pattern.jsx'

import {PrimaryButton, SecondaryButton} from './support/button.jsx'
import Image from './support/Image.jsx'
import Gallery from './support/Gallery.jsx'

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

	render() {
		return (
			<div className="style-guide">
				<h1>Living Style Guide</h1>

				<Pattern title="<Button /> component with versions">
					<PrimaryButton label="Primary Button" onClick={() => alert('Primary Button')} />
					<SecondaryButton label="Secondary Button" onClick={() => alert('Secondary Button')} />
				</Pattern>
				
				<Pattern title="<Image /> component with properties">
		        	<Image openThisSite={()=> {window.open('https://cdn.pbrd.co/images/HhcxXlT.jpg','_blank')} } file= {{id: 1, name: 'Mt-Kosciuszko.jpg', url: 'https://cdn.pbrd.co/images/Hh2cnaR.jpg', error: false,}}/>
				</Pattern>

				<Pattern title="<Gallery /> component with images">
					<Gallery colNo= {3} images= {[
						{ id: 1, name: 'Mt-Kosciuszko-1.jpg', url: 'https://cdn.pbrd.co/images/Hh2cnaR.jpg', error: false, },
              			{ id: 2, name: 'Mt-Kosciuszko-2.jpg', url: 'https://cdn.pbrd.co/images/Hh2cnaR.jpg', error: false, },
              			{ id: 3, name: 'Mt-Kosciuszko-3.jpg', url: 'https://cdn.pbrd.co/images/Hh2cnaR.jpg', error: false, },
            				]}
            		/>
				</Pattern>

			</div>
		)
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary