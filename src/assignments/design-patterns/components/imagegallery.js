import React from "react";
import ImageCard from "./imagecard.js";
import "./imagegallery.scss";

const ImageGallery = ({ images, onImageSelect }) => {
  console.log(images);
  console.log("From imagegallery");
  return (
    <div className="imagegallery-container">
      {images.map(file => (
        <ImageCard file={file} onImageSelect={onImageSelect} />
      ))}
    </div>
  );
};

export default ImageGallery;
