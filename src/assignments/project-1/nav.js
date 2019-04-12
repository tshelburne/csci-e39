import React from 'react'


const Nav = ({link1, link2, link3, onClick1, onClick2, onClick3}) => {
	return <nav>
			<ul>
				<li><a href="#" onClick={onClick1}>{link1}</a></li>
				<li><a href="#" onClick={onClick2}>{link2}</a></li>
				<li><a href="#" onClick={onClick3}>{link3}</a></li>
			</ul>
	</nav>
};

export default Nav