import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/heroSection/Hero";
// import ParawithCards from "./components/paraAndCards/ParawithCards";
import OurServices from "./components/cards/OurServices";
import Marquee from "./components/marquee/Marqueelogo";
import Footer from "./components/footer/Footer";
import Achievements from "./components/Acheivments/Acheivments";
// import SuccessAwards from "./components/SuccessAwards/SucessAwards";
import ImagesSection from "./components/ImagesSection/ImageSection";
import Career from "./components/career/Career";
import Awards from "./components/awards/Awards";
// import Testimonial from "./components/testimonial/Testimonials";
import ReviewsTestimonial from "./components/reviews/Reviews";
import IndustriesSection from "./components/industries/IndustriesSection";
import FeaturedInsights from "./components/featureInsight/FeaturedInsights";
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
