
import PropTypes from 'prop-types';
import React, { Component } from 'react';

function Section ({ title, styleName, headingLevel, children }) {
    let Head = "h" + headingLevel;
    return (
        <section className={styleName}>
            <Head>{title}</Head>
            {children}
        </section>
    )
}

Section.defaultProps = {
    headingLevel: '2'
};

Section.propTypes = { 
    title:PropTypes.string.isRequired, 
    styleName:PropTypes.string, 
    headingLevel:PropTypes.oneOf(['2', '3','4','5','6'])
  };

export default Section