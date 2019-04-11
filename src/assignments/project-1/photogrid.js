import React from 'react'

import './app.scss'

const App = () =>

<div>
	 className="container">
		<h1>Polaroid Challenge</h1>
		<h2>CSS Grid this up!</h2>
	<div className="polaroid-grid3">
			<figure className="polaroid saturated">
				<img src="https://www.fillmurray.com/400/400" alt="Bill Murray" />
				<figcaption className="polaroid-caption">CSS Filter: Saturate </figcaption>
			</figure>

			<figure className="polaroid grayscale">
				<img src="https://www.fillmurray.com/400/400" alt="Bill Murray" />
				<figcaption className="polaroid-caption">CSS Filter: Grayscale </figcaption>
			</figure>

			<figure className="polaroid blur">
				<img src="https://www.fillmurray.com/400/400" alt="Bill Murray" />
				<figcaption className="polaroid-caption">CSS Filter: Blur </figcaption>
			</figure>

			<figure className="polaroid hue-rotate">
				<img src="https://www.fillmurray.com/400/400" alt="Bill Murray" />
				<figcaption className="polaroid-caption">CSS Filter: Hue-rotate</figcaption>
			</figure>

			<figure className="polaroid brightness">
				<img src="https://www.fillmurray.com/400/400" alt="Bill Murray" />
				<figcaption className="polaroid-caption">CSS Filter: Brightness </figcaption>
			</figure>
			
				<figure className="polaroid brightness">
				<img src="https://www.fillmurray.com/400/400" alt="Bill Murray" />
				<figcaption className="polaroid-caption">CSS Filter: Brightness </figcaption>
			</figure>
		</div>
			</div> 

ReactDOM.render(<Photogrid/>, document.getElementById ('app');

export default Photogrid