import React from "react";
import MainLayout from "../layouts/MainLayout";
import ContactForm from "../components/contactform/ContactForm";
import Marqueelogo from "../components/marquee/Marqueelogo";
import ReviewsTestimonial from "../components/reviews/Reviews";
import MissionVision from "../components/aboutUs/missionVision/MissionVision";
import AboutUsHero from "../components/aboutUs/AboutUsHero";

const AboutUs = () => {
  return (
    <>
      <MainLayout>
        <AboutUsHero />
        <div className="container my-5 aboutus-content-wrapper">
          <div className="text-center mb-5">
            <h2 className="aboutus-heading highlight">About Us</h2>
            <p className="aboutus-subheading  ">
              iCreativez Technologies is a global IT and Digital Marketing
              company founded by Mehboob Shar. What began as a one-person vision
              is now a team of 220+ professionals, serving clients in 18+
              countries including the USA, UK, Canada, Australia, UAE, and more.
            </p>
          </div>

          <div className="row text-center mb-4"></div>

          <div className="row text-center mb-4 ">
            <div className="col card-box mx-5 pt-5">
              <h5 className="aboutus-title highlight">
                Why Choose iCreativez?
              </h5>
              <p className="aboutus-text">
                Featured in the top IT outsourcing companies on Google SERP,
                offering custom Web & App Development, SEO, Digital Marketing,
                Business Automation, and more.
              </p>
            </div>
            <div className="col  card-box mx-0">
              <h5 className="aboutus-title highlight">Global Presence</h5>
              <p className="aboutus-text">
                Serving clients in Europe, North America, Oceania, and Asia with
                reliable, research-backed, and future-ready solutions.
              </p>
            </div>
          </div>
          <MissionVision />
          <div className="text-center mt-5 ">
            <h2 className="aboutus-title fs-1">Let’s Grow Together</h2>
            <p className="aboutus-text fs-4">
              Partner with iCreativez Technologies — where your success is our
              mission.
            </p>
            <a href="/contact" className="btn btn-primary  mt-2">
              Contact Us
            </a>
          </div>
        </div>

        {/* <Marqueelogo /> */}
        <ReviewsTestimonial />
        <ContactForm />
      </MainLayout>
    </>
  );
};

export default AboutUs;
