import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HeroImg1 from "../../assets/images/it-outsourcing-company-worldwide.jpg";
import HeroImg2 from "../../assets/images/icreativez-news-events.jpg";
import HeroImg3 from "../../assets/images/marketer.jpg";
import "./Hero.css";
import CustomButton from "../button/Button";

const Hero = () => {
  const images = [HeroImg1, HeroImg2, HeroImg3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.to(sliderRef.current, {
      x: `-${currentSlide * 100}%`,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [currentSlide]);

  return (
    <div className="hero-container">
      <div className="hero-slider-wrapper">
        <div className="hero-slider" ref={sliderRef}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="hero-image"
            />
          ))}
        </div>
      </div>

      <div className="hero-dots">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <CustomButton className="primary-btn position-absolute btn-position">
        Get in Touch
      </CustomButton>
    </div>
  );
};

export default Hero;
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HeroImg1 from "../../assets/images/it-outsourcing-company-worldwide.jpg";
import HeroImg2 from "../../assets/images/icreativez-news-events.jpg";
import HeroImg3 from "../../assets/images/marketer.jpg";
import "./Hero.css";
import CustomButton from "../button/Button";

const Hero = () => {
  const images = [HeroImg1, HeroImg2, HeroImg3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.to(sliderRef.current, {
      x: `-${currentSlide * 100}%`,
      duration: 1,
      ease: "power2.inOut",
    });
  }, [currentSlide]);

  return (
    <div className="hero-container">
      <div className="hero-slider-wrapper">
        <div className="hero-slider" ref={sliderRef}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Slide ${index + 1}`} className="hero-image" />
          ))}
        </div>
      </div>

      <div className="hero-dots">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <CustomButton className="primary-btn position-absolute btn-position">
        Get in Touch
      </CustomButton>
    </div>
  );
};

export default Hero;
