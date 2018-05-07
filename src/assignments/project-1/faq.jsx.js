import React from 'react';

const Faq = () => {
	return (
		<div className="copy-grid">
			<div className="copy-content">
				<article className="faq-copy">
					<h3>What is this?</h3>
					<p>This is a very simple image uploader.</p>
				</article>
				<article className="faq-copy">
					<h3>How does it work</h3>
					<p>
						You just click on the Upload Files button at the top of the page and it will allow you to select
						files from your hard drive and upload them to our database.
					</p>
				</article>
				<article className="faq-copy">
					<h3>How much does it cost?</h3>
					<p>It is absolutely free.</p>
				</article>
				<article className="faq-copy">
					<h3>How many photos can I upload?</h3>
					<p>As many as you want.</p>
				</article>
				<article className="faq-copy">
					<h3>How large can the photos be?</h3>
					<p>The size limit for all photos is set at 500mb.</p>
				</article>
			</div>
		</div>
	);
};

export default Faq;
