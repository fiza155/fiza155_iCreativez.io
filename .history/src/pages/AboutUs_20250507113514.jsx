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
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black overlay
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              iCreativez Technologies: A Decade of Digital Transformation
            </h1>
            <p style={{ fontSize: "1.5rem", maxWidth: "600px" }}>
              Discover the journey and passion that drive us to create
              innovative solutions and deliver exceptional experiences.
            </p>
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
