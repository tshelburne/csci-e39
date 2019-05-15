import React from "react";
import PropTypes from "prop-types";
import Example, { ActiveCodeProvider } from "./support/example";
import ImageCard from "./components/imagecard.js";

import "./app.scss";
import "./components/imagecard.scss";

const file = [{id:'station one',name:'000', url:'https://www.fillmurray.com/200/300', error:false}];
const onImageSelect = file => {
  console.log("From the image!!!!");

};

const PatternLibrary = () => (
  <ActiveCodeProvider>
    <div className="style-guide">
      <h1>My Pattern Library!</h1>

      <Example title="My Icons">
        <h4 className="just-testing">Icons example</h4>
      </Example>

      <Example title="My Card">
        <ImageCard file={file} onImageSelect={onImageSelect} />
      </Example>

      <Example title="My Gallery">
        <ImageCard file={file} onImageSelect={onImageSelect} />
      </Example>

      <Example title="My Upload Bar">
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
