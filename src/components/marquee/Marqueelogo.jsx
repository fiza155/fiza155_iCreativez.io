import React from "react";
import "./Marquee.css";

const Marquee = () => {
  return (
    <div className="marquee-wrapper">
      {/* Left to Right Marquee */}
      <div className="marquee marquee-left">
        <div className="marquee-content">
          {[...Array(1)].map((_, i) => (
            <React.Fragment key={i}>
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/1.png"
                alt="Logo1"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/2-2.png"
                alt="Logo2"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/3-1.png"
                alt="Logo3"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/4-1.png"
                alt="Logo4"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/5-1.png"
                alt="Logo5"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/7-1.png"
                alt="Logo6"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/6-1.png"
                alt="Logo7"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/8-1.png"
                alt="Logo8"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/9.png"
                alt="Logo9"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/10.png"
                alt="Logo10"
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Right to Left Marquee */}
      <div className="marquee marquee-right">
        <div className="marquee-content">
          {[...Array(1)].map((_, i) => (
            <React.Fragment key={i}>
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/11.png"
                alt="Logo11"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/12.png"
                alt="Logo12"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/13-1.png"
                alt="Logo13"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/14.png"
                alt="Logo14"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/15.png"
                alt="Logo15"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/16.png"
                alt="Logo16"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/17.png"
                alt="Logo17"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/18.png"
                alt="Logo18"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/20.png"
                alt="Logo19"
              />
              <img
                src="https://icreativez.info/wp-content/uploads/2024/11/19.png"
                alt="Logo20"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
