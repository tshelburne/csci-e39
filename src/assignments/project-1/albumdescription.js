import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class AlbumDescription extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {paragraphs} = this.props
		return (
		<main>
			{/* Loop through all the content paragraphs that are passed into the component */}
			{/* Component expects a data object that has header, header_class, text, and text_class. */}
			{paragraphs.map((paragraph) =>
				<>
					<div className={paragraph.header_class}>{paragraph.header}</div>
					<p className={paragraph.text_class}>{paragraph.text}</p>
				</>
			)}
		</main>	
		);	
	}
}

export default AlbumDescription