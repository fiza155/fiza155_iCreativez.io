import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FeaturedInsights.css";
import CustomButton from "../button/Button";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  // ... same card data
];

const FeaturedInsights = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="featured-insights" ref={sectionRef}>
      <div className="row">
        <div className="col-md-5 flex-column justify-content-center ps-5 custom">
          <h4 className="text-uppercase">Featured Insights</h4>
          <h2>
            Discover stories, blogs, <br />
            <span className="">and insights from our journey.</span>
          </h2>
          <h3 className="fw-normal text-dark mt-2">
            Turning Ideas Into Action
          </h3>
          <CustomButton className="position-relative my-3">
            Explore More
          </CustomButton>
        </div>

        <div className="col-md-7 overflow-visible">
          <div className="d-flex gap-3 pe-3 flex-wrap">
            {(() => {
              const layout = [2, 3, 3];
              let cardIndex = 0;
              return layout.map((count, colIndex) => {
                const colCards = cardsData.slice(cardIndex, cardIndex + count);
                cardIndex += count;
                const staggerStyle = {
                  marginTop: `-${colIndex * 40}px`,
                };

                return (
                  <div
                    key={colIndex}
                    className="d-flex flex-column gap-3"
                    style={staggerStyle}
                  >
                    {colCards.map((card, index) => {
                      const totalIndex = cardIndex - count + index;
                      return (
                        <div
                          key={index}
                          ref={(el) => (cardsRef.current[totalIndex] = el)}
                          className="card insight-card text-white"
                          style={{ backgroundImage: `url(${card.image})` }}
                        >
                          <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                              <h6 className="fw-bold text-white">{card.tag}</h6>
                              <p className="fw-normal text-white mb-0">
                                {card.title}
                              </p>
                            </div>
                            <button className="btn btn-outline-light btn-sm mt-3 explore-btn">
                              Explore More →
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInsights;
