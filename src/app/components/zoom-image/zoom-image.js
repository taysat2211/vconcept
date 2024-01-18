import React from "react";
import "./zoom-image.css";

function ZoomImage(props) {
  const {src, alt} = props;
  return <div className="zoom-image">
    <img src={src} alt={alt} />
  </div>;
}

export default ZoomImage;
