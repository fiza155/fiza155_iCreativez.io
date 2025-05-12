import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Acheivments.css";
import Button from "../button/Button";

const Achievements = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="achievements">
      {/* Left Side - Content */}
      <div className="achievements-content">
        <h2>iCreativez’s Achievements</h2>
        <p>
          We are {""}
          <span style={{ color: "#4285f4", fontSize: "28px" }}>G</span>
          <span style={{ color: "#ea4335", fontSize: "28px" }}>o</span>
          <span style={{ color: "#fbbc05", fontSize: "28px" }}>o</span>
          <span style={{ color: "#4285f4", fontSize: "28px" }}>g</span>
          <span style={{ color: "#34a853", fontSize: "28px" }}>l</span>
          <span style={{ color: "#ea4335", fontSize: "28px" }}>e</span>'s
          Featured, World's Top Solution Provider!
        </p>

        <p>
          As a Global Brand, iCreativez Shaping The Future of Marketing &
          Technology!
        </p>
        {/* <button className=" contact-btn">Get in Touch</button> */}
        <Button className="my-4"> Get in Touch </Button>
      </div>

      {/* Right Side  */}
      <div className="stats" ref={ref}>
        <div className="stat">
          <h3>{inView && <CountUp start={0} end={300} duration={3} />}%</h3>
          <p>Yearly Growth</p>
        </div>
        <div className="stat">
          <h3>{inView && <CountUp start={0} end={19} duration={3} />}+</h3>
          <p>Countries Supported Across the World</p>
        </div>
        <div className="stat">
          <h3>{inView && <CountUp start={0} end={40} duration={3} />}+</h3>
          <p>Equipped with Advanced Technologies </p>
        </div>
        <div className="stat">
          <h3>{inView && <CountUp start={0} end={10} duration={3} />}+</h3>
          <p>Years of Enablement Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
