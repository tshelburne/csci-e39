import React from "react";
import PropTypes from "prop-types";
import Example, { ActiveCodeProvider } from "./support/example";
import ImageCard from "./components/imagecard.js";
import ImageGallery from "./components/imagegallery.js";
import PendingUpload from "./components/pendingupload.js";
import Button from "./components/button.js";

import "./app.scss";

const file = {
  id: "01",
  name: "Photo 01",
  url: "https://www.fillmurray.com/100/100",
  error: false,
  progress: 40
};

const file2 = {
  id: "02",
  name: "Photo 02",
  url: "https://www.fillmurray.com/150/150",
  error: false,
  progress: 70
};

const file3 = {
  id: "03",
  name: "Photo 03",
  url: "https://www.fillmurray.com/150/100",
  error: false,
  progress: 90
};
const images = [file, file2, file3];

const uploaddata = [file, file2, file3];

const onImageSelect = file => {
  console.log("From the image!!!!");
};

const PatternLibrary = () => (
  <ActiveCodeProvider>
    <div className="style-guide">
      <h1>My Pattern Library!</h1>

      <Example title="<Buttons>">
        <Button>Basic</Button>
      </Example>

      <Example title="Image Card">
        <ImageCard file={file} onImageSelect={onImageSelect} />
      </Example>

      <Example title="Image Gallery">
        <ImageGallery images={images} onImageSelect={onImageSelect} />
      </Example>

      <Example title="Upload Bar">
        <PendingUpload uploaddata={uploaddata}  />
      </Example>
    </div>
  </ActiveCodeProvider>
);

export default PatternLibrary;
