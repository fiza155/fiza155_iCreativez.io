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
        <div
          style={{
            display: "flex",
            height: "100vh",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "70%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <img
              src={AboutUsImg}
              className="img-fluid"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "",
              }}
            />
          </div>
          <div
            style={{
              width: "30%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              // backgroundColor: "#000000cc",
              // color: "white",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "2.8rem",
                letterSpacing: "2px",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              A Decade of Digital Transformation
            </h1>
            <p style={{ fontSize: "1.5rem" }}>
              From a one-person company to a global Tech & Digital brand with a
              team of over 220 talented professionals, 5 locations, and clients
              in 19 countries.
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
