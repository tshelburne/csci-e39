import React from 'react'
import InitialBlock from '../../ui/components/intial_block'



class Member extends React.Component {

	render() {
		const {classroom,cn, ...inputProps} = this.props
		return <nav id='member-list'>
			<h2>Members</h2>
			<ul>
                {classroom.students.map(({id, name}) =>
					<li key={id}><span>
						<InitialBlock name={name} cn="friend-name" />

						{name}</span></li>
                )}
			</ul>
		</nav>
	}
}

export default Member
