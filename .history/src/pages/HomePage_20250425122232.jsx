// src/pages/HomePage.jsx
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/heroSection/Hero";
// import ParawithCards from "../components/paraAndCards/ParawithCards";
import OurServices from "../components/cards/OurServices";
import Marquee from "../components/marquee/Marqueelogo";
import Footer from "../components/footer/Footer";
import Achievements from "../components/Acheivments/Acheivments";
// import SuccessAwards from "../components/SuccessAwards/SucessAwards";
import ImagesSection from "../components/ImagesSection/ImageSection";
import Career from "../components/career/Career";
import Awards from "../components/awards/Awards";
import MainLayout from "../layouts/MainLayout";
// import Testimonial from "../components/testimonial/Testimonials";

function HomePage() {
  return (
    <>
      <MainLayout>
        <Header />
        <Navbar />
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

        {/* <SuccessAwards /> */}

        <Footer />
      </MainLayout>
    </>
  );
}

export default HomePage;
