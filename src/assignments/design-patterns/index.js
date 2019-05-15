import React from 'react'
import Example, {ActiveCodeProvider} from './support/example'
import GalleryPost from './components/gallerypost.js'
import Polaroid from './components/polaroid.js'
import Button, {SecondaryButton} from './components/button';
import Footer from './components/footer.js'

import './app.scss'

/* button props */
let generic_btn_props = {
	button_text: 'Primary',
	button_fxn: false,
	button_cls: false
}
let secondary_btn_props = {
	button_text: 'Secondary',
	button_fxn: () => alert('Does something!'),
	button_cls: 'secondary-button'
}
let button_description = "Here are the two standard buttons that can be used with a cherry blossom design. The grey outlined buttons \
						 will be reserved for call-to-action items while the borderless button is the default for all other actions."


/* polaroid props */
let polaroid_props = {
	img_url: "https://cdn1.thehunt.com/app/public/system/zine_images/2186040/zine_view_thumb/a8b3cec39d6215521cf04e074a042672.jpg",
	img_description: "Here is a photograph of a pink polaroid camera. It was taken not with a polaroid camera, but a digital camera.",
	img_title: "Pink Polaroid"
}
let polaroid_description = "This is an example of a polaroid which will be the standard way that a cherry blossom page will display an image. \
							This component includes a 'Like' and 'Share' <Button> so that users can interact with the images."


/* post props */
let user_props = {
	usr_name: "Sakura" 
}
let post_props = Object.assign({}, user_props, polaroid_props)
let post_description = "This is an example of a gallery post made by a user. This component displays a <Polaroid> which includes a \
					   'Like' and 'Share' <Button>. The photo title will appear at the top of the card and display the poster's name and date added. \
					   A <SecondaryButton> allows gallery viewers to follow the user who posted the photograph."


/* footer props */
let footer_props = {
	element1: "contact us",
	element2: "faq",
	element3: "careers",
	element4: "terms of use"
}
let footer_description = "The footer for all cherry blossom pages contains 4 elements to maintain a simplistic aesthetic. \
					These elements can be easily changed by entering the desired footer element name as a prop."

const CherryBlossom = () =>
	<ActiveCodeProvider>
		<body className="style-guide">
			<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Muli" />

			<h1>
				<img class="sakura" src="https://image.flaticon.com/icons/png/512/1087/1087436.png" alt="sakura-img" />
				cherryblossom
			</h1>
			<p>Welcome to the design library for cherry blossom. Cherry blossom is a design pattern created by Marissa Fisher, a little-known web developer based out of Cambridge, MA.
			Cherry blossom was inspired by the beautiful spring blooms in Boston this time of year. Her goal is to share cherry blossom with the world so that anyone can 
			easily incorporate her thoughtfully designed React components into their application.
			</p>

			<Example title="Gallery Post" description={post_description}>
				<GalleryPost {...post_props} />
			</Example>

			<Example title="Buttons" description={button_description}>
				<Button {...generic_btn_props} />
				<SecondaryButton {...secondary_btn_props} />
			</Example>

			<Example title="Polaroid" description={polaroid_description}>
				<Polaroid {...polaroid_props} />
			</Example>

			<Example title="Footer" description={footer_description}>
				<Footer {...footer_props} />
			</Example>

			<div>Icons made by <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
		</body>
	</ActiveCodeProvider>

export default CherryBlossom