import React from 'react'
import PropTypes from 'prop-types'


function ComponentBorder(props) {
  return (
    <div className={'ComponentBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <ComponentBorder color="green">
      <h1>
        Welcome
      </h1>
      <p>
        Thank you for visiting this page!
      </p>
    </ComponentBorder>
  );
}




export default WelcomeDialog 
