import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HeroImg3 from "../../assets/images/it-outsourcing-company-worldwide.jpg";
import HeroImg2 from "../../assets/images/icreativez-news-events.jpg";
import HeroImg1 from "../../assets/images/marketer.jpg";
import "./Hero.css";
import CustomButton from "../button/Button";

const Hero = () => {
  const images = [
    HeroImg1,
    "https://www.icreativez.com/assets/images/flagsClients2.png",
    HeroImg3,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const zoomRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Slide Effect
    gsap.to(sliderRef.current, {
      x: `-${currentSlide * 100}%`,
      duration: 1,
      ease: "power2.Out",
    });

    // Zoom Effect (only on current slide)
    zoomRefs.current.forEach((el, index) => {
      gsap.killTweensOf(el);
      if (index === currentSlide) {
        gsap.fromTo(
          el,
          { scale: 1.1 },
          { scale: 1, duration: 8, ease: "power2.out" }
        );
      } else {
        gsap.set(el, { scale: 1 }); // reset others
      }
    });
  }, [currentSlide]);

  return (
    <div className="hero-container">
      <div className="hero-slider-wrapper">
        <div className="hero-slider" ref={sliderRef}>
          {images.map((img, index) => (
            <img
              key={index}
              ref={(el) => (zoomRefs.current[index] = el)}
              src={img}
              alt={`Slide ${index + 1}`}
              className="hero-image"
            />
          ))}
        </div>
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <h1>Your Global IT Partner</h1>
        <p>
          We provide reliable IT outsourcing solutions to businesses around the
          world. Let us help you scale with ease and innovation.
        </p>
        <CustomButton className="primary-btn">Get in Touch</CustomButton>
      </div>

      {(currentSlide === 1 || currentSlide === 2) && (
        <div className="hero-special-message text-white text-center px-4">
          <h2 className="fw-bold">
            We are Google's Featured, World's Top Solution Provider!
          </h2>
          <p className="fs-5 mt-2">
            Clients in 19 countries! The first client from a new country will
            get <strong>20% OFF</strong> on their first project.
          </p>
        </div>
      )}

      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
