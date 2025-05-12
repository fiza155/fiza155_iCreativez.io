import React from "react";
import AboutUsImg from "../assets/images/aboutUs/icreativez-story-new.png";
import MainLayout from "../components/layout/MainLayout";
const AboutUs = () => {
  return (
    <>
      <MainLayout>
        <img
          src={AboutUsImg}
          alt="About Us"
          className="img-fluid w-100"
          style={{ height: "60vh", objectFit: "cover" }}
        />
      </MainLayout>
    </>
  );
};

export default AboutUs;
