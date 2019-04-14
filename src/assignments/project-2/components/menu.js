import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class Menu extends React.Component {

constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {menuItems} = this.props
		return( 
			<div>
				<ul>
					{
						menuItems.map(item => {
							return <li><a>{item.name}</a></li>
						})
					}
				</ul>
			</div>
			 )
		}
	}
export default Menu