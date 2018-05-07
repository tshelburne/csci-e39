import React from 'react';
import { DefaultAction } from '../action/action.jsx';

const navLinks = [
	{
		id: 0,
		name: 'Documentation',
		path: '/',
	},
	{
		id: 1,
		name: 'Examples',
		path: '/',
	},
	{
		id: 2,
		name: 'About',
		path: '/',
	},
];

const Nav = ({ extraClass, action, ctaClass }) => {
	return (
		<nav className={`${extraClass}`}>
			<ul>
				{navLinks.map(navLink => (
					<li key={navLink.id}>
						<a href={navLink.path}>{navLink.name}</a>
					</li>
				))}
				{action ? (
					<li>
						<DefaultAction ctaClass={ctaClass} action={action} />
					</li>
				) : null}
			</ul>
		</nav>
	);
};

export const DefaultNav = ({ extraClass, action, ctaClass }) => {
	return <Nav extraClass={extraClass} ctaClass={ctaClass} action={action} />;
};

DefaultNav.displayName = `DefaultNav`;
