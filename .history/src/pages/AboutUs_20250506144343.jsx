import React from "react";
import AboutUsImg from "../assets/images/aboutUs/icreativez-story-new.png";
import MainLayout from "../layouts/MainLayout";
import ContactForm from "../components/contactform/ContactForm";
const AboutUs = () => {
  return (
    <>
      <MainLayout>
        <img
          src={AboutUsImg}
          alt="About Us"
          className="img-fluid w-100"
          style={{ height: "auto", objectFit: "cover", marginTop: "" }} // adjust as per navbar height
        />
        <Marqueelogo />
        <ContactForm />
      </MainLayout>
    </>
  );
};

export default AboutUs;
