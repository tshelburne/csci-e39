import React from 'react'
import PropTypes from 'prop-types'
import Example, {ActiveCodeProvider} from './support/example'
import Card from './components/card'
import * as Icons from './components/icon'
// import Carousel from './components/carousel'
import TextBlock from './components/text-block'
import Button, {ButtonGroup, ConfirmButton, CancelButton} from './components/button'
import CardHeader from './components/card-header'
import CardBody from './components/card-body'
import CardFooter from './components/card-footer'

import './app.scss'

$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

const PatternLibrary = () =>
	<ActiveCodeProvider>
		<div className="style-guide">
		<header>
			<h1>Yan's Pattern Library!</h1>
		</header>
		<nav id="navigation-menu">
			<ul>
				<a href="#card-header-container"><li>CardHeader</li></a>
				<a href="#card-body-container"><li>CardBody</li></a>
				<a href="#card-container"><li>Card</li></a>
				<a href="#text-block-container"><li>TextBlock</li></a>
				<a href="#button-container"><li>Button</li></a>
				<a href="#icons-container"><li>Icons</li></a>
			</ul>
		</nav>
		<main>
			<section id="card-header-container">
				<Example title="<CardHeader>">
					<CardHeader image={'https://source.unsplash.com/user/erondu/600x400'} />
					A CardHeader is a component that creates a header banner and is can be used with <b>CardBody </b>
					inside a <b>Card</b>.
					<hr/>
					<CardFooter title={'Props'}>
					<ul>
						<li>image :  <i> An image for the header background </i> </li>
					</ul>
					</CardFooter>
				</Example>
			</section>

			<section id="card-body-container">
			<Example title="<CardBody>">
				<CardBody title={'Title'} date={'March 19 2019'} text={'CardBody Content. Wow so cool! This is a really long paragraph. BLAH BLAH BLAH'}/>
				A CardBody is a component that holds text content and can be used in
				conjunction with CardHeader and Card.
				<hr/>
				<CardFooter title={'Props'}>
				<ul>
					<li>title : <i> Title for the CardBody text </i> </li>
					<li>text :  <i> Content for the CardBody </i></li>
				</ul>
				</CardFooter>
			</Example>
			</section>

			<section id="card-container">
			<Example title="<Card>">
				<Card title={'Title'} image={'https://source.unsplash.com/user/erondu/600x400'} date={'December 11 2017'}>
				A Card is a component that can be used as
				a container to standardized and as a wrapper for the appearance of information
				such as images, text, etc.
				</Card>
				<hr/>
				<CardFooter title={'Props'}>
					<ul>
						<li>image :  <i> An image source for the CardHeader background</i> </li>
						<li>title :  <i> Title for the CardHeader and CardBody</i></li>
						<li>children : <i>Elements between the opening and closing tags </i> </li>
					</ul>
				</CardFooter>

			</Example>
			</section>

			<section id="text-block-container">
			<Example title="<TextBlock>">
				<TextBlock>
				<p>A Textblock is a component that can be used as
				a container to standardized the appearance of information such as images, text, etc.
				</p>
				</TextBlock>
				<hr/>
				<CardFooter title={'Props'}>
					<ul>
						<li>children :  <i>Elements between the opening and closing tags </i></li>
					</ul>
				</CardFooter>
			</Example>
			</section>

			<section id="button-container">
			<Example title="<Button>">
				<Button> Standard Button </Button>
				<Button block primary> Important Button </Button>
				<Button block secondary> Not-so-important Button </Button>
				<ButtonGroup>
					<ConfirmButton>Confirm</ConfirmButton>
					<CancelButton>Cancel</CancelButton>
				</ButtonGroup>
				<hr/>
				<CardFooter title={'Props'}>
					<ul>
						<li>attributes : <i> block, primary, secondary </i> </li>
					</ul>
				</CardFooter>
			</Example>
			</section>

			<section id="icons-container">
			<Example title="<Icons>">
				<Icons.Notification/>
				<Icons.Close md/>
				<Icons.Left/>
				<Icons.Right/>
				<Icons.Save/>

				<p>Icons are class-altering components
				that can be used to add functionality to a page.
				</p>
				<hr/>

				<CardFooter title={'Props'}>
					<ul>
						<li>types : <i>Notifications, Close, Left, Right, Save </i> </li>
					</ul>
				</CardFooter>
			</Example>
			</section>
		</main>

		</div>
	</ActiveCodeProvider>

export default PatternLibrary
