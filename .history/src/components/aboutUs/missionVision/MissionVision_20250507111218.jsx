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
              To empower businesses with innovative digital solutions that drive
              growth and success.
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


/* Responsive Design */
@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }

    .card-box {
        padding: 40px 20px 30px;
    }

    .quote-circle {
        width: 60px;
        height: 60px;
        top: -20px;
        right: 10px;
    }

    .quote-icon {
        font-size: 40px;
    }

    .mission-text {
        font-size: 1rem;
        line-height: 1.5;
    }
}

@media (max-width: 480px) {
    .section-title {
        font-size: 1.8rem;
    }

    .card-box {
        padding: 30px 15px 20px;
    }

    .quote-circle {
        width: 50px;
        height: 50px;
        top: -15px;
        right: 5px;
    }

    .quote-icon {
        font-size: 30px;
    }

    .mission-text {
        font-size: 0.9rem;
        line-height: 1.4;
    }
}