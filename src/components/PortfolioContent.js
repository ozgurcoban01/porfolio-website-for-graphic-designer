import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";
import Content from "./Content.js";
import Navbar from "./Navbar.js";

const PortfolioContent = (props) => {
    const [pophupContent, setPopHupContent] = useState(false);

    const pictureURL=props.data.image+Math.floor(Math.random() * 100);

    
  return (
    <>
      <div className={`popHup ${pophupContent ? "pophupContentActive" : ""}`}>
        <div onClick={() => setPopHupContent(false)} className="exit">
          X
        </div>
        <div className="pophupContent">{props.data.intext}</div>
      </div>
      <div onClick={() => setPopHupContent(true)} className="portfolioContent">
        <img src={pictureURL}></img>
        <div className="portfolioContentText">{props.data.intext}</div>
      </div>
    </>
  );
};

export default PortfolioContent;
