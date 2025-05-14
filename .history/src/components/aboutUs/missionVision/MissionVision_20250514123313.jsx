import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  return (
    <div className="container py-5">
      <div className="row gy-5">
        <div className="col-md-12">
          <h2 className="section-title ">
            Our Core <span className="highlight">Values</span>
          </h2>
          <div className="position-relative card-box py-md-2 px-auto ">
            <div className="quote-circle d-sm-block">
              <i className="bi bi-quote quote-icon"></i>
            </div>
            <p className="mission-text my-sm-5">
              <span className="text-justify">
                Innovation &nbsp; | &nbsp; Integrity &nbsp; | &nbsp; Client
                Success &nbsp; | &nbsp; Collaboration &nbsp; | &nbsp; Excellence
                &nbsp; | &nbsp; Accountability
              </span>
            </p>
          </div>
        </div>
        {/* Mission Section */}
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <h2 className="section-title">
            Our <span className="highlight">Mission</span>
          </h2>
          <div className="card-box position-relative flex-grow-1 d-flex align-items-center">
            <div className="quote-circle">
              <i className="bi bi-quote quote-icon"></i>
            </div>
            <p className="mission-text text-center">
              To empower businesses with innovative digital solutions that drive
              growth and success.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <h2 className="section-title">
            Our <span className="highlight">Vision</span>
          </h2>
          <div className="card-box position-relative flex-grow-1 d-flex align-items-center">
            <div className="quote-circle">
              <i className="bi bi-quote quote-icon"></i>
            </div>
            <p className="mission-text text-center">
              To be a global leader in providing cutting-edge technology
              solutions and delivering exceptional client experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
