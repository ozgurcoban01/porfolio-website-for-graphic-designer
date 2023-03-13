import React from "react";
import "../styles/portfolio.css";
import Content from "./Content.js";
import Navbar from "./Navbar.js";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div className="portfolioContainer">
        <div className="portfolioPageLayer1">
          <span className="line"></span>
          <div className="portfolioText">Portfolio</div>
          <span className="line"></span>
        </div>

        <div className="portfolioContentContainer">
          <div className="portfolioContent">
            <img src="https://source.unsplash.com/random/"></img>
            <div className="portfolioContentText">asdfasdf</div>
          </div>
          <div className="portfolioContent">
            <img src="https://source.unsplash.com/random/"></img>
            <div className="portfolioContentText">asdfasdf</div>
            <img src="https://source.unsplash.com/random/"></img>
          </div>{" "}
          <div className="portfolioContent">
            <div className="portfolioContentText">asdfasdf</div>
            <img src="https://source.unsplash.com/random/"></img>
          </div>{" "}
          <div className="portfolioContent">
            <div className="portfolioContentText">asdfasdf</div>
            <img src="https://source.unsplash.com/random/"></img>
          </div>{" "}
          <div className="portfolioContent">
            <div className="portfolioContentText">asdfasdf</div>
            <img src="https://source.unsplash.com/random/"></img>
          </div>     <div className="portfolioContent">
            <div className="portfolioContentText">asdfasdf</div>
            <img src="https://source.unsplash.com/random/"></img>
          </div>     <div className="portfolioContent">
            <div className="portfolioContentText">asdfasdf</div>
            <img src="https://source.unsplash.com/random/"></img>
          </div>     <div className="portfolioContent">
            <div className="portfolioContentText">asdfasdf</div>
            <img src="https://source.unsplash.com/random/"></img>
          </div>     <div className="portfolioContent">
            <div className="portfolioContentText">asdfasdf</div>
            <img src="https://source.unsplash.com/random/"></img>
          </div>     <div className="portfolioContent">
            <div className="portfolioContentText">asdfasdf</div>
            <img src="https://source.unsplash.com/random/"></img>
          </div>     <div className="portfolioContent">
            <div className="portfolioContentText">asdfasdf</div>
            <img src="https://source.unsplash.com/random/"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
