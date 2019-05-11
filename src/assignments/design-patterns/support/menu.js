import React from 'react'

const Menu = ({menuItems, classes}) => {
		return( 
			<div className={classes}>
				<ul>
					{
						menuItems.map((item,i) => {
							return <li key={i}><a href={item.url}>{item.name}</a></li>
						})
					}
				</ul>
			</div>
			 )
		}
export default Menu