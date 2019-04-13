import React from 'react' 
const Header = ({ imgSrc, text, children }) => ( 
	<header className="main-head"><img className="header-photo" src={imgSrc} />{text}{children}</header>  
) 

export default Header