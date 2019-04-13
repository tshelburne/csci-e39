import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class FaqDescription extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {faqs} = this.props
		return (
		<div>
			{/* Loop through all the content paragraphs that are passed into the component */}
			{/* Component expects a data object that has header, header_class, text, and text_class. */}
			{faqs.map((faq) =>
				<>
					<div className={faq.question_class}>{faq.question}</div>
					<div className={faq.answer_class}>{faq.answer}</div>
				</>
			)}
		</div>	
		);	
	}
}

export default FaqDescription