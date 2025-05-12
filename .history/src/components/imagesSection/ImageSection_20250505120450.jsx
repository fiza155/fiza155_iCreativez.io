import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Images.css";
import EventImg from "../../assets/images/icreativez-news-events.jpg";
import SRCImg from "../../assets/images/1-1-1024x512.webp";

gsap.registerPlugin(ScrollTrigger);

const images = [
  EventImg,
  SRCImg,
  "https://www.icreativez.com/assets/images/life-icreativez.png",
];

const ImagesSection = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      const bg = section.querySelector(".bg");

      bg.style.backgroundImage = `url("${images[i]}")`;

      if (i > 0) {
        bg.style.backgroundPosition = `50% ${window.innerHeight / 2}px`;

        gsap.to(bg, {
          backgroundPosition: `50% ${-window.innerHeight / 2}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            scrub: true,
          },
        });
      } else {
        bg.style.backgroundPosition = "50% 0px";

        gsap.to(bg, {
          backgroundPosition: `50% ${-window.innerHeight / 2}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            scrub: true,
          },
        });
      }
    });
  }, []);

  return (
    <div>
      {["I", "❤", "iCreativez"].map((text, index) => {
        const isMiddle = index === 1;

        const sectionContent = (
          <>
            <div className="bg"></div>
            <h1>
              {text === "❤" ? (
                <span style={{ color: "red", fontSize: "10rem" }}>{text}</span>
              ) : text === "iCreativez" ? (
                <>
                  <span style={{ color: "red" }}>i</span>Creativez
                </>
              ) : (
                text
              )}
            </h1>
          </>
        );

        return (
          <section
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={
              index === 0 ? "left-box" : index === 2 ? "right-box" : ""
            }
          >
            {isMiddle ? (
              <a
                href="https://example.com" // 🔗 Replace this with your desired URL
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {sectionContent}
              </a>
            ) : (
              sectionContent
            )}
          </section>
        );
      })}
    </div>
  );
};

export default ImagesSection;
