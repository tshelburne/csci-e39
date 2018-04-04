import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
	<header>
		<h1>{props.tagline}</h1>
	</header>
);

Header.propTypes = {
	tagline: PropTypes.string.isRequired,
};

export default Header;
