import React from 'react'

class Member extends React.Component {

	render() {
		return <nav id='member-list'>
			<h2>Members</h2>
			<ul>
                {this.props.classroom.students.map(({id, name}) =>
					<li key={id}><span>{name}</span></li>
                )}
			</ul>
		</nav>
	}
}

export default Member
