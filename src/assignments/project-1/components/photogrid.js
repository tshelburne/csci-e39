import React from 'react'
import './app.scss'

const Photogrid = () =>

<div>
	 className="container">
		<h1> Travel Polaroid Collection</h1>
		<h2>All places to put on your bucket list </h2>
	<div className="polaroid-grid3">
			<figure className="polaroid saturated">
				<img src="https://https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80" alt="cinque tere, Italy" />
				<figcaption className="polaroid-caption">On the Almafi Coastline</figcaption>
			</figure>

			<figure className="polaroid grayscale">
				<img src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="Rio De Janeiro, Brazil" />
				<figcaption className="polaroid-caption">Spent the Summer in Brazil </figcaption>
			</figure>

			<figure className="polaroid blur">
				<img src="https://images.unsplash.com/photo-1446160657592-4782fb76fb99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80" alt="Golden Gate Bridge" />
				<figcaption className="polaroid-caption">Foggy days in San Fran</figcaption>
			</figure>

			<figure className="polaroid hue-rotate">
				<img src="https://images.unsplash.com/photo-1505205296326-2178af1b47bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="Paris, France" />
				<figcaption className="polaroid-caption">Light up the night in Paris</figcaption>
			</figure>

			<figure className="polaroid brightness">
				<img src="https://images.unsplash.com/photo-1461681922067-669418071e5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="Macchu Picchu, Peru" />
				<figcaption className="polaroid-caption ">Lots of Llamas Everywhere </figcaption>
			</figure>
			
				<figure className="polaroid brightness">
				<img src="https://images.unsplash.com/photo-1429277096327-11ee3b761c93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" alt="Trolltunga, Norway" />
				<figcaption className="polaroid-caption">Can you say Trolltunga three times?  </figcaption>
			</figure>
		</div>
			</div> 

ReactDOM.render(<Photogrid/>, document.getElementById ('photos');

export default Photogrid