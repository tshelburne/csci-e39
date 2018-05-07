import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => (
	<header>
		<h1>{props.tagline}</h1>
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/faq">FAQ</Link>
				</li>
			</ul>
		</nav>
	</header>
);

Header.propTypes = {
	tagline: PropTypes.string.isRequired,
};

export default Header;
