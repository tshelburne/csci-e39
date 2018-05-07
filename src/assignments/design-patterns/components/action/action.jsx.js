import React from 'react';

const Action = ({ action, ctaClass }) => {
	return <button className={`callToAction ${ctaClass}`}>{action}</button>;
};

export const DefaultAction = ({ action, ctaClass }) => {
	return <Action action={action} ctaClass={ctaClass} />;
};

DefaultAction.displayName = `DefaultAction`;
