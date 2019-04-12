import React from 'react'

const Faq = ({name, className, content1, content2, content3}) => {
	return <b className={className}>
	<h2>{name}</h2>
	<ol>
		<li>{content1}</li>
		<li>{content2}</li>
		<li>{content3}</li>
	</ol>
	</b>
};

export default Faq