import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  return (
    <div className="container py-5">
      <div className="row gy-5">
        {/* Mission Section */}
        <div className="col-md-6">
          <h2 className="section-title">
            Our <span className="highlight">Mission</span>
          </h2>
          <div className="card-box position-relative">
            <div className="quote-circle">
              <i className="bi bi-quote quote-icon"></i>
            </div>
            <p className="mission-text text-center">
              To empower businesses with cutting-edge technology solutions,
              unlocking their growth potential by connecting them with
              passionate and skilled engineers.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="col-md-6">
          <h2 className="section-title">
            Our <span className="highlight">Vision</span>
          </h2>
          <div className="card-box position-relative">
            <div className="quote-circle">
              <i className="bi bi-quote quote-icon"></i>
            </div>
            <p className="mission-text text-center">
              To become a global leader in innovative technology, delivering
              sustainable digital transformation that empowers businesses and
              communities around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
