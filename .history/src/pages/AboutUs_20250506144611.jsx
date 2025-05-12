import React from "react";
import AboutUsImg from "../assets/images/aboutUs/icreativez-story-new.png";
import MainLayout from "../layouts/MainLayout";
import ContactForm from "../components/contactform/ContactForm";
import Marqueelogo from "../components/marquee/Marqueelogo";
import ReviewsTestimonial from "../components/reviews/Reviews";
const AboutUs = () => {
  return (
    <>
      <MainLayout>
        <img
          src={AboutUsImg}
          alt="About Us"
          className="img-fluid w-100"
          style={{ height: "auto", objectFit: "contsin", marginTop: "" }} // adjust as per navbar height
        />
        <Marqueelogo />
        <ReviewsTestimonial />
        <ContactForm />
      </MainLayout>
    </>
  );
};

export default AboutUs;
