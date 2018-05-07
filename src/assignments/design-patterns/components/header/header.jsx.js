import React from 'react';
import { DefaultNav } from '../nav/nav.jsx';

const Header = ({ extraClass, title, ctaClass, action }) => {
	return (
		<header className={`${extraClass}`}>
			<h1>
				<a href="">{title}</a>
			</h1>
			<DefaultNav extraClass={extraClass} ctaClass={ctaClass} action={action} />
		</header>
	);
};

export const DefaultHeader = ({ title, extraClass, action, ctaClass }) => {
	return <Header ctaClass={ctaClass} action={action} extraClass={extraClass} title={title} />;
};

DefaultHeader.displayName = `DefaultHeader`;
