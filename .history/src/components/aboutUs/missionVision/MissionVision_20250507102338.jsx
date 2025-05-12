import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Mission Section */}
        <div className="col">
          <div className="custom-card position-relative p-4">
            <div className="quote-icon bg-teal rounded-circle d-flex align-items-center justify-content-center position-absolute">
              <i className="bi bi-quote quote-icon-inner"></i>
            </div>
            <h2 className="fw-bold mb-4">
              Our <span className="text-teal">Mission</span>
            </h2>
            <p className="card-text text-center">
              To empower businesses with cutting-edge technology solutions,
              unlocking their growth potential by connecting them with
              passionate and skilled engineers.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="col-md-6">
          <div className="custom-card position-relative p-4">
            <div className="quote-icon bg-teal rounded-circle d-flex align-items-center justify-content-center position-absolute">
              <i className="bi bi-quote quote-icon-inner"></i>
            </div>
            <h2 className="fw-bold mb-4">
              Our <span className="text-teal">Vision</span>
            </h2>
            <p className="card-text text-center">
              To become a global leader in innovative tech solutions, driving
              sustainable digital transformation for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
