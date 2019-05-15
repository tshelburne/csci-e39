import React from 'react';

const getYear= () => {
	return new Date().getFullYear();
};

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<ul className="footer-list">
					<li>
						Logo
					</li>
					<li>
						<a className="footer-link" href="placeholder">
						Home
						</a>
					</li>
					<li>
						<a className="footer-link" href="placeholder">
						Contact us
						</a>
					</li>
				</ul>
				<ul className= 'footer-list'>
					<li>
						<a className="footer-link" href="placeholder">
							About
						</a>
					</li>
					<li>
						<span className="footer-link"> © {getYear()} Website </span>
					</li>
				</ul>
			</div>
		</footer>

	);
};

export default Footer;