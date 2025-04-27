import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/heroSection/Hero";
import ParawithCards from "./components/paraAndCards/ParawithCards";
import OurServices from "./components/cards/OurServices";
import Marquee from "./components/marquee/Marqueelogo";
import Footer from "./components/footer/Footer";
import Achievements from "./components/Acheivments/Acheivments";
import SuccessAwards from "./components/SuccessAwards/SucessAwards";
import ImagesSection from "./components/ImagesSection/ImageSection";
import Career from "./components/career/Career";
import Awards from "./components/awards/Awards";
import Testimonial from "./components/testimonial/Testimonials";
import ReviewsTestimonial from "./components/reviews/Reviews";
import IndustriesSection from "./components/industries/IndustriesSection";
import FeaturedInsights from "./components/featureInsight/FeaturedInsights";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <OurServices />
      <IndustriesSection />
      <FeaturedInsights />
      <Marquee />
<<<<<<< HEAD
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
=======
>>>>>>> 37c5883df08da69402b79fe3b730dbab0bf8e46d
      <Footer />
    </>
  );
}

export default App;
