import React from 'react'

const Nav = ({link1, link2, link3}) => {
	return <nav>
			<ul>
				<li><a href="#">{link1}</a></li>
				<li><a href="#" className="active">{link2}</a></li>
				<li><a href="#">{link3}</a></li>
			</ul>
	</nav>
};

export default Nav