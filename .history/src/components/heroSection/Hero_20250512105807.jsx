import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HeroImg3 from "../../assets/images/heroImages/it-outsourcing-company-worldwide.jpg";
import HeroImg1 from "../../assets/images/heroImages/marketer.jpg";
import "./Hero.css";
import CustomButton from "../button/Button";
import HeroImage2 from "../../assets/images/heroImages/flagsClients2.png";

const Hero = () => {
  const images = [HeroImg1, HeroImage2, HeroImg3];
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
        gsap.fromTo(el, { scale: 1 }, { scale: 1, duration: 12, ease: "back" });
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
              style={
                img === HeroImage2
                  ? {
                      backgroundSize: "contain",
                      //  height: "100vh"
                    }
                  : {}
              }
            />
          ))}
        </div>
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <h1>
          {currentSlide === 1 || currentSlide === 2 ? (
            <>
              We are {""}
              <span style={{ color: "#4285f4" }}>G</span>
              <span style={{ color: "#ea4335" }}>o</span>
              <span style={{ color: "#fbbc05" }}>o</span>
              <span style={{ color: "#4285f4" }}>g</span>
              <span style={{ color: "#34a853" }}>l</span>
              <span style={{ color: "#ea4335" }}>e</span>
              's Featured, World's Top Solution Provider!
            </>
          ) : (
            "Your Global IT Partner!"
          )}
        </h1>
        <p>
          {currentSlide === 1 || currentSlide === 2 ? (
            <>
              Clients in 19 countries! The first client from a new country will
              get
              <span
                style={{
                  color: "yellow",
                  fontWeight: "bold",
                  fontSize: "1.9rem",
                }}
              >
                {" "}
                20% OFF{" "}
              </span>
              on their first project.
            </>
          ) : (
            "We provide reliable IT outsourcing solutions to businesses around the world. Let us help you scale with ease and innovation."
          )}
        </p>

        <CustomButton className="primary-btn">Get in Touch</CustomButton>
      </div>

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
