import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  return (
    <div className="container py-5">
      <div className="row gy-5">
        <div className="col-md-12">
          <h5 className="section-title">
            Core <span className="highlight">Values</span>
          </h5>
          <div className="card-box position-relative">
            <div className="quote-circle">
              <i className="bi bi-quote quote-icon"></i>
            </div>
            <p className="mission-text ">
              <span className="">
                {" "}
                Innovation &nbsp; | &nbsp; Integrity &nbsp; | &nbsp; Client
                Success &nbsp; | &nbsp; Collaboration &nbsp; |
              </span>
            </p>
          </div>
        </div>
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
              To &nbsp; empower &nbsp; businesses &nbsp; with &nbsp; innovative
              &nbsp; digital &nbsp; solutions &nbsp; that &nbsp; drive &nbsp;
              growth &nbsp; and &nbsp; success.
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
              To &nbsp; be &nbsp; a &nbsp; global &nbsp; leader &nbsp; in &nbsp;
              providing &nbsp; cutting-edge &nbsp; technology &nbsp; solutions
              &nbsp; and &nbsp; delivering &nbsp; exceptional &nbsp; client
              &nbsp; experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
