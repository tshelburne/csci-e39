import React from 'react'
import PropTypes from 'prop-types'



export default class Messages extends React.Component {
	constructor(props) {
		super(props);
	}
	
	// this.state = {

	// }
}

render() {
	const { items } = this.props;
	// console.log(items);

	return (
		<h2>Messages</h2>
			<ul>
				{chat.messages.map(({id, student, text, createdAt}) =>
					<li key={id}>
						<label>{student.name} at {createdAt.toISOString()}</label>
						<p>{text}</p>
					</li>
				)}
			</ul>
	)
}

const studentPropType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
})

Messages.propTypes = {
	chat: PropTypes.shape({
		messages: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			student: studentPropType,
			createdAt: PropTypes.instanceOf(Date).isRequired,
		})).isRequired
	}),
}
