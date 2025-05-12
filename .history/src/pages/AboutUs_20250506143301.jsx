import React from "react";
import AboutUsImg from "../assets/images/aboutUs/icreativez-story-new.png";
import MainLayout from "../layouts/MainLayout";
const AboutUs = () => {
  return (
    <>
      <MainLayout>
        <img
          src={AboutUsImg}
          alt="About Us"
          className=" w-100"
          style={{ height: "60vh", objectFit: "cover" }}
        />
      </MainLayout>
    </>
  );
};

export default AboutUs;
