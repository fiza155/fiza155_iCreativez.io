import React from "react";
import AboutUsImg from "../../assets/images/aboutUs/icreativez-story-new.png";
import "./AboutUsHero.css";

const AboutUsHero = () => {
  return (
    <div className="aboutus-hero-container">
      <img src={AboutUsImg} alt="About Us" className="aboutus-hero-image" />
      <div className="aboutus-hero-overlay">
        <h4 className="aboutus-hero-subtitle align-star">About us</h4>
        <h1 className="aboutus-hero-title">
          A Decade of Digital Transformation
        </h1>
        <p className="aboutus-hero-text">
          From a one-person company to a global Tech & Digital brand with a team
          of over 220 talented professionals, 5 locations, and clients in 19
          countries.
        </p>
      </div>
    </div>
  );
};

export default AboutUsHero;
