import React from "react";
import AboutUsImg from "../assets/images/aboutUs/icreativez-story-new.png";

const AboutUs = () => {
  return (
    <div>
      <img
        src={AboutUsImg}
        alt="About Us"
        className="img-fluid w-100"
        style={{ height: "60vh", objectFit: "cover" }}
      />
    </div>
  );
};

export default AboutUs;
