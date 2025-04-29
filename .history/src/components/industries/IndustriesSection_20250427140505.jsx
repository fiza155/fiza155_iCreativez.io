import React from "react";
import "./IndustriesSection.css";
import {
  FaPlane,
  FaBroadcastTower,
  FaOilCan,
  FaShoppingCart,
  FaHeartbeat,
  FaUniversity,
  FaStore,
  FaRocket,
  FaCreditCard,
  FaGamepad,
  FaArrowRight,
} from "react-icons/fa";
import CustomButton from "../button/Button";

const industries = [
  { icon: <FaPlane />, title: "Travel & Hospitality" },
  { icon: <FaBroadcastTower />, title: "Telecommunication" },
  { icon: <FaOilCan />, title: "Oil, Gas, and Energy" },
  { icon: <FaShoppingCart />, title: "E-commerce" },
  { icon: <FaHeartbeat />, title: "Healthcare & Pharmaceuticals" },
  { icon: <FaUniversity />, title: "Public Sector" },
  { icon: <FaStore />, title: "Retail & CPG" },
  { icon: <FaRocket />, title: "Startups" },
  { icon: <FaCreditCard />, title: "Banking & Fintech" },
  { icon: <FaGamepad />, title: "Gaming" },
];

const IndustriesSection = () => {
  return (
    <div className="container py-5 my-4">
      <h1 className="text-center fw-bold mb-5 py-2 fs-2">
        Explore Our Contribution Across Industries
      </h1>
      <div className="row">
        {industries.map((industry, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <div className="industry-item d-flex justify-content-between align-items-center  border-bottom  py-3">
              <div className="d-flex align-items-center gap-3 fs-5">
                <span className="me-2 fs-3 industry-icon fw-b">
                  {industry.icon}
                </span>
                <span className="fw-bold text-dark">{industry.title}</span>
              </div>
              <FaArrowRight className="arrow-icon" />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        {/* <button className="btn btn-info text-white px-4 py-2 rounded-pill">
          Let's Talk Business
        </button> */}
        <CustomButton className="primary-btn text-center">
          Let's Talk Business
        </CustomButton>
      </div>
    </div>
  );
};

export default IndustriesSection;
