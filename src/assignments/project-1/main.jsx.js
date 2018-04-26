import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Uploads from './uploads.jsx';
import Faq from './faq.jsx';

const Main = props => (
	<main>
		<Switch>
			{/* I've tried every combination of this to no avail */}
			<Route path="/" render={props => <Uploads {...props} props={props} />} />
			<Route path="/faq" component={Faq} />
		</Switch>
	</main>
);

export default Main;
