import React from 'react';
import PropTypes from 'prop-types';
import Uploader from '../../ui/components/uploader.jsx';
import Header from './header.jsx';
import Completed from './completed.jsx';
import Progress from './progress.jsx';
import Copy from './copy.jsx';
import Loader from './loader.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

const Uploads = props => (
	<div>
		<Header tagline="Jay's Little Image Uploader" />
		<Copy tagline="What is this?" />
		<div className="upload-component">
			<form action="#">
				<label className="uploader">
					Upload Files
					{/* do not delete this uploader component */}
					<Uploader upload={actions.upload} />
					{/* do not delete this uploader component */}
				</label>
			</form>
		</div>
		<div className="progress-component">
			<h2>In Progress</h2>
			<Progress pendingFiles={pendingFiles} />
		</div>

		<div className="completed-component">
			<h2>Completed</h2>
			<div className="completed-grid">
				<Completed completedFiles={completedFiles} />
			</div>
		</div>
	</div>
);

export default Uploads;
