import React from 'react';
import PropTypes from 'prop-types';
import Header from './header.jsx';
import Uploads from './uploads.jsx';
import Faq from './faq.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Living = props => (
	<Router>
		<div>
			<Header tagline="Jay's Little Image Uploader" />
			<Switch>
				<Route exact path="/" render={() => <Uploads actions={props.actions} uploads={props.uploads} />} />
				<Route path="/faq" component={Faq} />
			</Switch>
		</div>
	</Router>
);

export default Living;
