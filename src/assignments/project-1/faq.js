import React from 'react'
import Img from './img'

const Faq = ({name, className, content1, content2, content3}) => {
	return <b className={className}>
	<h2>{name}</h2>
	<ol>
		<li>{content1}</li>
		<li>{content2}</li>
		<li>{content3}</li>
	</ol>
	<Img className="faq-icon" src="http://www.ptaindia.com/wp-content/uploads/2018/10/icon-FAQ-500px.png" alt="FAQ" />
	</b>
};

export default Faq