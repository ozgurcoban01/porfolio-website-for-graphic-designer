import React from "react";
import "../styles/content.css";
import videoBg from "../assets/backgroundVideo.mp4";
const Content = () => {
  return (
    <div className="contentDiv">
      <video className="bgVideo" src={videoBg} autoPlay loop muted></video>
    </div>
  );
};

export default Content;
