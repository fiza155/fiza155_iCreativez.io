import React from "react";
import AboutUsImg from "../assets/images/aboutUs/icreativez-story-new.png";
import MainLayout from "../layouts/MainLayout";
import ContactForm from "../components/contactform/ContactForm";
import Marqueelogo from "../components/marquee/Marqueelogo";
import ReviewsTestimonial from "../components/reviews/Reviews";
import MissionVision from "../components/aboutUs/missionVision/MissionVision";
const AboutUs = () => {
  return (
    <>
      <MainLayout>
        <div style={{ position: "relative" }}>
          <img
            src={AboutUsImg}
            alt="About Us"
            className="img-fluid w-100 mb-3"
            style={{
              height: "100vh",
              objectFit: "",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Our Story
          </div>
        </div>
        <MissionVision />
        {/* <Marqueelogo /> */}
        <ReviewsTestimonial />
        <ContactForm />
      </MainLayout>
    </>
  );
};

export default AboutUs;
