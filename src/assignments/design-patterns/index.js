import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example'
import Footer from './support/footer'
import Header from './support/header'
import Toggle from './support/toggle'
import Logo from './support/logo'

import './app.scss'
import './footer.scss'
import './header.scss'
import './toggle.scss'
import './logo.scss'

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)

		this.state = {activeCode: `react`,
    					items: []
		}

	}

  	componentDidMount(){
    {/* CITATION: Copied this function from http://codelikethis.com/lessons/react/fetching-data */}
    
	  	fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          items: result
        });
      });
	  }

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		}
	}

	render() {
  	const { items } = this.state;
	if (!this.state.items.length) {
      
      return <div>Loading links for footer... </div>;
      
    } else {
    	var links = this.state.items.filter(link => (link.id < 8));

		return (
			<div className="footer-special">
				<h1>James Massa's Pattern Library!</h1>

				<Example title="My Special <Header>">
					      <Header  title="This Title is a prop"  
					      		   text="This text is a prop but the photo is a <Logo> component which should be the same on every page"></Header>
					      
					      <Header  title="This is another Header component"  
					      		   text="See... the text is different.  Hooray for props!"></Header>
				</Example>

				<Example title="My Special <Footer>">
					<Footer title="This text is a prop. The <Footer> component has 2 nested grid layouts. 
								   The outer grid contains the <Logo>, text, and a 3-column inner grid of links. 
						           The links come dynamically from a JSON service and are filtered to show just the first links.
						           The code sample below displays as if I hard coded the JSON data but in my actual code I 
						           call the service dynamically. " 
						    links={links}/>
				</Example>

				<Example title="My Special <toggle>">
					<Toggle/>
				</Example>

				<Example title="Putting all 3 components together">
					<Toggle>
						<Header  title="Header Title"  text="This is my header text"></Header> 
						<Footer title="Learn More at these Links" links={links}/>
					</Toggle>
				</Example>

			</div>
		)
	}	
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary