import React from 'react';
import PropTypes from 'prop-types';
import Header from './header.jsx';

const Faq = () => (
	<div className="copy-grid">
		<div className="copy-content">
			<h3>What is this?</h3>
			<p>This is a very simple image uploader.</p>
			<h3>How does it work</h3>
			<p>
				You just click on the Upload Files button at the top of the page and it will allow you to select files
				from your hard drive and upload them to our database.
			</p>
			<h3>How much does it cost?</h3>
			<p>It is absolutely free.</p>
			<h3>How many photos can I upload?</h3>
			<p>As many as you want.</p>
			<h3>How large can the photos be?</h3>
			<p>The size limit for all photos is set at 500mb.</p>
		</div>
	</div>
);

export default Faq;
