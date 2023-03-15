import React from "react";
import "../styles/footer.css";

import behance from "../assets/png1.png";
import insta from "../assets/png2.png";
import wp from "../assets/png3.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="contentContainer">
        <div className="footerLayers footerLayer1">
          <p>
            <h3>Hello</h3>
            <br></br>
            My name is Baybars, I am 22 years old. I have been dealing with
            graphic design for about 10 years. I have a total of 8 years of
            graphic design education, 4 years at high school and 4 years at
            university. I graduated from Nisantasi University Graphic Design
            Department. - Adobe Photoshop - Adobe Illustrator - Adobe After
            Effects - Adobe Premiere Pro - Adobe Lightroom - Blender I am
            experienced and talented about programs.
          </p>
        </div>
        <div className="footerLayers footerLayer2">
          <p>
            - Adobe Photoshop <br></br>
            - Adobe Illustrator <br></br>
            - Adobe After Effects <br></br>
            - Adobe Premiere Pro <br></br>
            - Adobe Lightroom <br></br>
            - Blender <br></br><br></br>
            I am experienced and talented about programs.<br></br><br></br>
            E-Mail: baybarsgg@gmail.com<br></br>
            Whatsapp: +90 546 657 46 13
          </p>
        </div>
        <div className="footerLayers footerLayer3">
            <img src={behance} className="behance" ></img>
            <img  src={insta} style={{height:"35%"}} className="insta"></img>
            <img src={wp} className="wp"></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
