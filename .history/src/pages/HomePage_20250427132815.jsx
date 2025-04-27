import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/heroSection/Hero";
// import ParawithCards from "../components/paraAndCards/ParawithCards";
import OurServices from "../components/cards/OurServices";
import Marquee from "../components/marquee/Marqueelogo";
import Achievements from "../components/Acheivments/Acheivments";
import ImagesSection from "../components/ImagesSection/ImageSection";
import Career from "../components/career/Career";
import Awards from "../components/awards/Awards";
// import Testimonial from "../components/testimonial/Testimonials";
import ReviewsTestimonial from "../components/reviews/Reviews";
import IndustriesSection from "../components/industries/IndustriesSection";
import FeaturedInsights from "../components/featureInsight/FeaturedInsights";

function HomePage() {
  return (
    <>
      <MainLayout>
        <Hero />
        <OurServices />
        <IndustriesSection />
        <FeaturedInsights />
        <Marquee />

        {/* <ParawithCards /> */}

        <ImagesSection />

        <Awards />
        {/* <Testimonial /> */}

        <Achievements />
        <div style={{ height: "200vh" }}>
          <Career />
        </div>
        <ReviewsTestimonial />

        <SuccessAwards />
      </MainLayout>
    </>
  );
}

export default HomePage;
