import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import {Button,PrettyButton} from './components/button.jsx'
import Swatch from './components/swatch.jsx'
import Image from './components/image.jsx'
import Gallery from './components/gallery.jsx'
import autobind from 'class-autobind'


class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)
		autobind(this)

		this.state = {activeCode: `react`,view: 'atoms',flippy: true}
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		}
	}
	
	viewAtoms() {
		this.setState( {view:'atoms'} );
	}
	
	viewMolecules() {
		this.setState( {view:'molecules'} );
	}
	
	viewOrganisms() {
		this.setState( {view:'organisms'} );
	}
	
	flip() {
		this.setState( {flippy: !this.state.flippy} );
	}

	render() {
		const {activeCode,view,flippy} = this.state;
		const images = [
			{
				url: 'https://images.pexels.com/photos/274078/pexels-photo-274078.jpeg?auto=compress&cs=tinysrgb&h=350',
				alt: 'sexy lbd',
			},
			{
				url: 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=350',
				alt: 'student',
			},
			{
				url: 'https://images.pexels.com/photos/866027/pexels-photo-866027.jpeg?auto=compress&cs=tinysrgb&h=350',
				alt: 'powerful workout',
			},
			{
				url: 'https://images.pexels.com/photos/247199/pexels-photo-247199.jpeg?auto=compress&cs=tinysrgb&h=350',
				alt: 'umbrella',
			},
			{
				url: 'https://images.pexels.com/photos/144474/pexels-photo-144474.jpeg?auto=compress&cs=tinysrgb&h=350',
				alt: 'walking',
			}];
		
		return (
			<div className="style-guide">
				<h1>Longo Pattern Library!</h1>
				<nav>
					<Button name="Atoms" onClick={this.viewAtoms} active={view=='atoms'} />
					<Button name="Molecules" onClick={this.viewMolecules} active={view=='molecules'} />
					<Button name="Organisms" onClick={this.viewOrganisms} active={view=='organisms'} />
				</nav>
				{(view=='atoms') && (
					<section name='atoms'>
						<Example title="Button <Button>">
							<Button name="Active" active={flippy} onClick={this.flip}/>
							<Button name="Inactive" active={!flippy} onClick={this.flip}/> <br />
							<PrettyButton name="PRETTY!" active={false} />
						</Example>

						<Example title="Spotify Style Image <Image>">
							<Image url={images[0].url} 
										 alt={images[0].alt} />
						</Example>
					</section>
				)}
				{(view=='molecules') && (
					<section name='molecules'>
						<Example title="Color Swatch <Swatch>">
							<Swatch name='peachpuff' color='peachpuff'/>
						</Example>
					</section>
				)}
				{(view=='organisms') && (
					<section name='organisms'>
						<Example title="Image Gallery <Gallery>">
							<Gallery images={images} />
						</Example>
					</section>
				)}
				<h2>Color Palette</h2>
				<section className='colorpalette'>
					<Swatch name='$creaback' color='#6534ff' />
					<Swatch name='$creahighlight' color='#62bcfa' />
					<Swatch name='$creaaccent' color='#fccdd3' />
					<Swatch name='$creaneutral' color='#bbc4ef' />
					<Swatch name='$creablack' color='#111111' />
					<Swatch name='$creawhite' color='#ffffff' />
				</section>
			</div>
		)
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary