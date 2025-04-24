import React from "react";
import "./Awards.css";
import google from "../../assets/images/Awards/google.png";
import goodFirm from "../../assets/images/Awards/GoodFirmBadge.png";
import toppak from "../../assets/images/Awards/toppak.jpg";

const Awards = () => {
  return (
    <div className="awards-wrapper">
      <div className="custom">
        <h4 className="text-center mb-2">Partnership & Awards</h4>
        <h2 className="text-center fw-bold mb-3">
          Partnerships, Memberships & Awards
        </h2>
        <h3 className="text-center text-muted mb-4">
          We are an Award-Winning IT services company in Pakistan
        </h3>
        <div className="row justify-content-center align-items-center awards-layout">
          {/* Image - Left */}
          <div className="col-6 col-md-2 text-center small-card">
            <img src={toppak} alt="Top Asia" className="img-fluid" />
          </div>

          {/* Image - Center Left */}
          <div className="col-6 col-md-2 text-center large-card">
            <img src={google} alt="Google Partner" className="img-fluid" />
          </div>

          {/* Image - Center Right */}
          <div className="col-6 col-md-2 text-center large-card" style={width: ""}>
            <img src={goodFirm} alt="Good Firms" className="img-fluid" />
          </div>

          {/* Image - Right */}
          <div className="col-6 col-md-2 text-center small-card">
            <img src={toppak} alt="Top Asia" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
