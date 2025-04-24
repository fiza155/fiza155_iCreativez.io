import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HeroImg1 from "../../assets/images/it-outsourcing-company-worldwide.jpg";
import HeroImg2 from "../../assets/images/icreativez-news-events.jpg";
// import HeroImg3 from "../../assets/images/hero-slide-3.jpg";
import "./Hero.css";
import CustomButton from "../button/Button";

const Hero = () => {
  const heroImageRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [HeroImg1, HeroImg2, HeroImg1];

  useEffect(() => {
    gsap.fromTo(
      heroImageRef.current,
      { scale: 1.4 },
      { scale: 1, duration: 12, ease: "power2.out", yoyo: true, repeat: -1 }
    );
  }, [currentSlide]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  //   }, 5000); // Change slide every 5 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="hero-container">
      <img
        ref={heroImageRef}
        src={images[currentSlide]}
        alt="Hero Slide"
        className="hero-image"
      />
      <CustomButton
        className="primary-btn position-absolute"
        style={{ top: "80%", left: "7%" }}
      >
        Get in Touch
      </CustomButton>
    </div>
  );
};

export default Hero;
