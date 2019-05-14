import React from "react";
import PropTypes from "prop-types";
import Example, { ActiveCodeProvider } from "./support/example";
import ImageCard from "./components/imagecard.js";

import "./app.scss";

const file = [];
const onImageSelect = (file) =>  {
  console.log('From the image!!!!' );


  console.log( );
}

const PatternLibrary = () => (
  <ActiveCodeProvider>
    <div className="style-guide">
      <h1>My Pattern Library!</h1>

      <Example title="My ICONS">
        <h4 className="just-testing">ICONS example</h4>
      </Example>

      <Example title="My CARD">
        <ImageCard file={file} onImageSelect={onImageSelect} />
      </Example>

      <Example title="My Special <div>">
        <div className="just-testing">HELLO DIV</div>
      </Example>

      <Example title="My Special <span>">
        <span className="just-testing">HELLO SPAN</span>
      </Example>

      <Example title="My Special <h4>">
        <h4 className="just-testing">HELLO HEADING</h4>
      </Example>
    </div>
  </ActiveCodeProvider>
);

export default PatternLibrary;
