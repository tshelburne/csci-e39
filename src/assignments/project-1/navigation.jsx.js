import React from 'react';
import PropTypes from 'prop-types';

import {Menu, MenuItem} from 'material-ui/Menu';
import Divider from 'material-ui/Divider';

const Nav = props => (
	<navigation className="hg__nav">
		<Menu value={props.currentRoute}>
	      <MenuItem value="all" checked={true} primaryText="All Fotos" />
	      <MenuItem value="favs" primaryText="Favorites"/>
	    <Divider />
	      <MenuItem value="deleted" primaryText="Trash" />
	    </Menu>

	</navigation>
);

Nav.propTypes = {
	currentRoute: PropTypes.string.isRequired,
};

export default Nav;
