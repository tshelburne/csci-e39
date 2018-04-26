import React from 'react';
import PropTypes from 'prop-types';
import Main from './main.jsx';
import Header from './header.jsx';
import Uploads from './uploads.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

const Dying = props => (
	<BrowserRouter>
		<div>
			<Header tagline="Jay's Little Image Uploader" />
			{/* Component Main does not work */}
			{/* <Main /> */}
			{/* I've tried every combination that I could find but cannot pass the props through the route, any hints on this would be much appreciated */}
			{/* Component Uploads does work on its own but not with the router, thus FAQ cannot be accessed */}
			<Uploads {...props} />
		</div>
	</BrowserRouter>
);

export default Dying;
