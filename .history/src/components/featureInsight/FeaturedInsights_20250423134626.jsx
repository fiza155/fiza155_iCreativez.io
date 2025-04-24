import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FeaturedInsights.css";
import CustomButton from "../button/Button";
import BlogImage1 from "../../assets/images/Insights/360_F_340591403_1a5sd1hXg78FIq4n6oeoXZtHP9Mjucsm.jpg";
import BlogImage2 from "../../assets/images/Insights/information-8589033_640.png";
import BlogImage3 from "../../assets/images/Insights/360_F_340591403_1a5sd1hXg78FIq4n6oeoXZtHP9Mjucsm.jpg";
import BlogImage4 from "../../assets/images/Insights/ITomage.jpg";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    tag: "Case Study",
    title: "Enabling Seamless Resale Operations Across E-Commerce",
    image: BlogImage1,
  },
  {
    tag: "Blogs",
    title: "Custom Web Application Development: Everything You Need to Know",
    image: BlogImage2,
  },
  {
    tag: "Case Study",
    title: "KUDO's Journey to Bridging Global Communications",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqsk-e0APJQZOAIUY00gIAI_A79uylbrswV9KOVvu8vl3eNxbzFMYhb56kweVTtObRmyw&usqp=CAU",
  },
  {
    tag: "Case Study",
    title: "Empowering XQUIC for Automated Financial Accuracy",
    image:
      "https://cdn.prod.website-files.com/5fbbb0e57743e457bcfe097b/62bc63163fbee7f5d7ea487b_pexels-pixabay-261909.jpg",
  },
  {
    tag: "Blogs",
    title: "How Cloud Computing Can Transform Small Businesses",
    image: BlogImage4,
  },
  {
    tag: "Blogs",
    title: "Trends of Mobile Design: What's Next for Your Business?",
    image:
      "https://www.shutterstock.com/image-photo/graduation-cap-earth-globe-concept-260nw-2349898783.jpg",
    explore: true,
  },
  {
    tag: "Blogs",
    title: "How Generative AI Is Transforming Business Operations",
    image:
      "https://media.istockphoto.com/id/1033717120/photo/digital-technology-concept-binary-code.jpg?s=612x612&w=0&k=20&c=t6Teo3SfrQdI7_yPijtDL5fYOH798F37YIsNXSP6TzA=",
  },
  {
    tag: "Case Study",
    title: "Automating Financial Insights for Smarter Business Decisions",
    image:
      "https://media.istockphoto.com/id/155073017/photo/pie-chart.jpg?s=612x612&w=0&k=20&c=N0KtsimhdoBraHt4EYtmWbSv9udSd7olFV8XGhBeYTQ=",
  },
];

const FeaturedInsights = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Only animate on md and up
    if (window.innerWidth >= 768) {
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
    }
  }, []);

  return (
    <div className="featured-insights" ref={sectionRef}>
      <div className="row">
        <div className="col-md-5 flex-column justify-content-center ps-5 custom">
          <h4 className="text-start text-uppercase">Featured Insights</h4>
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
          {/* Step layout for md+ screens */}
          <div className="d-none d-md-flex gap-3 pe- flex-wrap">
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
                              <h6 className="fw-semibold text-white">
                                {card.tag}
                              </h6>
                              <p className="fw-normal text-white mb-0">
                                {card.title}
                              </p>
                            </div>
                            <button className="btn btn-outline-light mt-3 explore-btn">
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

          {/* Normal layout for small screens */}
          <div className="d-flex d-md-none flex-column gap-3 mt-3">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="card insight-card text-white"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="fw-semibold text-white">{card.tag}</h6>
                    <p className="fw-normal text-white mb-0">{card.title}</p>
                  </div>
                  <button className="btn btn-outline-light mt-3 explore-btn">
                    Explore More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInsights;
