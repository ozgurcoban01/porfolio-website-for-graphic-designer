import React, { useState, useEffect } from "react";
import "../styles/portfolio.css";
import Content from "./Content.js";
import PortfolioContent from "./PortfolioContent.js";
import Navbar from "./Navbar.js";

const Portfolio = () => {
 
  const popHupContents = [
    {
      intext: "1",
      image: `https://source.unsplash.com/random/`,
    },
    {
      intext: "2",
      image: `https://source.unsplash.com/random/`,
    },
    {
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },{
      intext: "3",
      image: `https://source.unsplash.com/random/`,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="portfolioContainer ">
        <div className="portfolioPageLayer1">
          <span className="line"></span>
          <div className="portfolioText">Portfolio</div>
          <span className="line"></span>
        </div>

        <div className="portfolioContentContainer">
          {popHupContents.map((popHupContent) => (
            <PortfolioContent data={popHupContent} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
