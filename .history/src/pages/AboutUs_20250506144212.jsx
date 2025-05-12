import React from "react";
import AboutUsImg from "../assets/images/aboutUs/icreativez-story-new.png";
import MainLayout from "../layouts/MainLayout";
const AboutUs = () => {
  return (
    <>
      <MainLayout>
        <div style={{ paddingTop: "80px" }}>
          {" "}
          {/* adjust this to match navbar height */}
          <img
            src={AboutUsImg}
            alt="About Us"
            className="img-fluid w-100"
            style={{ height: "calc(100vh - 80px)", objectFit: "cover" }}
          />
        </div>
      </MainLayout>
    </>
  );
};

export default AboutUs;
