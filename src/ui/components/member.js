import React from 'react'

class Member extends React.Component {

	render() {
		const {classroom, ...inputProps} = this.props
		return <nav id='member-list'>
			<h2>Members</h2>
			<ul>
                {classroom.students.map(({id, name}) =>
					<li key={id}><span>{name}</span></li>
                )}
			</ul>
		</nav>
	}
}

export default Member
