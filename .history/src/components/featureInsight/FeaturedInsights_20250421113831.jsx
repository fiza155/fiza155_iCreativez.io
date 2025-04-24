import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./FeaturedInsights.css";
import CustomButton from "../button/Button";

const cardsData = [
  {
    tag: "Case Study",
    title: "Enabling Seamless Resale Operations Across E-Commerce",
    image: "https://via.placeholder.com/300x200?text=Card1",
  },
  {
    tag: "Blogs",
    title: "Custom Web Application Development: Everything You Need to Know",
    image: "https://via.placeholder.com/300x200?text=Card2",
  },
  {
    tag: "Case Study",
    title: "KUDO's Journey to Bridging Global Communications",
    image: "https://via.placeholder.com/300x200?text=Card6",
  },
  {
    tag: "Case Study",
    title: "Empowering XQUIC for Automated Financial Accuracy",
    image: "https://via.placeholder.com/300x200?text=Card3",
  },
  {
    tag: "Blogs",
    title: "How Cloud Computing Can Transform Small Businesses",
    image: "https://via.placeholder.com/300x200?text=Card4",
  },
  {
    tag: "Blogs",
    title: "Trends of Mobile Design: What's Next for Your Business?",
    image: "https://via.placeholder.com/300x200?text=Card5",
    explore: true,
  },
  {
    tag: "Blogs",
    title: "How Generative AI Is Transforming Business Operations",
    image: "https://via.placeholder.com/300x200?text=Card7",
  },
  {
    tag: "Case Study",
    title: "Automating Financial Insights for Smarter Business Decisions",
    image: "https://via.placeholder.com/300x200?text=Card8",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturedInsights = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="featured-insights  " ref={ref}>
      <div className="row">
        <div className="col-md-5 flex-column justify-content-center ps-5 custom">
          <h4 className="text-uppercase">Featured Insights</h4>
          <h2>
            Discover stories,blogs, <br />
            <span className="">and insights from our journey.</span>
          </h2>
          <h3 className="fw-normal text-dark mt-2">
            Turning Ideas Into Action
          </h3>
          <CustomButton className="position-relative my-3 ">
            Explore More
          </CustomButton>
        </div>

        <div
          className="col-md-7 overflow-visible"
          // style={{ maxHeight: "600px" }}
        >
          <div className="featured-insights-scroll">
            <div className="d-flex gap-3 pe-3">
              {(() => {
                const layout = [2, 3, 3];
                let cardIndex = 0;
                return layout.map((count, colIndex) => {
                  const colCards = cardsData.slice(
                    cardIndex,
                    cardIndex + count
                  );
                  cardIndex += count;

                  // Step-like vertical stagger effect
                  const staggerStyle = {
                    marginTop: `-${colIndex * 40}px`, // adjust value (40px) as needed
                  };

                  return (
                    <motion.div
                      key={colIndex}
                      className="d-flex flex-column gap-3"
                      initial="hidden"
                      animate={controls}
                      variants={cardVariants}
                      style={staggerStyle}
                    >
                      {colCards.map((card, index) => (
                        <motion.div
                          key={index}
                          className="card insight-card text-white"
                          style={{ backgroundImage: `url(${card.image})` }}
                          variants={cardVariants}
                          initial="hidden"
                          animate={controls}
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
                        </motion.div>
                      ))}
                    </motion.div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInsights;
