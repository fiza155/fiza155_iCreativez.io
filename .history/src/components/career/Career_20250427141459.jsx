import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Career.css";
import CareerImage from "../../assets/images/icreativez-talent-hunting.jpg";
import CustomButton from "../button/Button";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const text = textRef.current;
    const isDesktop = window.innerWidth > 1024;

    gsap.set(text, { opacity: 0, x: 100, display: "none" });

    let textVisible = false;

    if (isDesktop) {
      gsap.fromTo(
        image,
        {
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: 1,
        },
        {
          width: "50%",
          height: "100vh",
          position: "relative",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom center",
            scrub: true,
            pin: true,
            onUpdate: (self) => {
              if (self.progress > 0.3 && !textVisible) {
                textVisible = true;
                gsap.set(text, { display: "flex" });
                gsap.to(text, { opacity: 0.9, x: 0, duration: 0.5 });
              }
            },
          },
        }
      );
    } else {
      // On smaller screens, show everything normally
      gsap.set(text, { display: "flex", opacity: 0.9, x: 0 });
    }
  }, []);

  return (
    <div className="animated-section" ref={sectionRef}>
      <div className="image-container" ref={imageRef}>
        <img src={CareerImage} alt="Career" />
      </div>
      <div className="" ref={textRef}>
        <h4>CAREERS</h4>

        <h1>Join our team at iCreativez.</h1>
        <p>
          At iCreativez, we believe in nurturing talent and fostering a culture
          of creativity. Join us to embark on a journey of growth,
          collaboration, and success.
        </p>
        <CustomButton>Join Now</CustomButton>
      </div>
    </div>
  );
};

export default Career;
