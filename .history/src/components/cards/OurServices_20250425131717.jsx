import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ServiceCard from "./ServiceCards.jsx";
import "./OurServices.css";
import SeoImg from "../../assets/images/services/affordable-seo-services.png";
import WebDev from "../../assets/images/services/web-designer.jpg";
import SoftDev from "../../assets/images/services/software_developer.jpg";
import EcommerceImg from "../../assets/images/services/ecommerce.jpg";
import MobilApp from "../../assets/images/services/ecommerce.jpg";
import Dmarketing from "../../assets/images/services/Dmarketing.jpg";
import SQA from "../../assets/images/services/SQA.jpg";
import brandingg from "../../assets/images/services/branding.jpg";

const initialServices = [
  {
    id: 1,
    image: "https://www.icreativez.com/assets/images/Research.png",
    bgImage: SeoImg,
    title: "SEO Services",
  },
  {
    id: 2,
    image:
      "https://www.icreativez.com/assets/images/Website%20Designing_Development.png",
    bgImage: WebDev,
    title: "Website Design",
  },
  {
    id: 3,
    image: "https://www.icreativez.com/assets/images/software.png",
    bgImage: SoftDev,
    title: "Software Development",
  },
  {
    id: 4,
    image: "https://www.icreativez.com/assets/images/E-Commerce-Websites.png",
    bgImage: EcommerceImg,
    title: "Ecommerce Website",
  },
];

const moreServices = [
  {
    id: 5,
    image:
      "https://www.icreativez.com/assets/images/Mobile-App-Development.png",
    bgImage: MobilApp,
    title: "Mobile App Development",
  },
  {
    id: 6,
    image: "https://www.icreativez.com/assets/images/Digital%20Marketing.png",
    bgImage: Dmarketing,
    title: "Digital Marketing",
  },
  {
    id: 7,
    image: "https://www.icreativez.com/assets/images/qa.png",
    bgImage: SQA,
    title: "Software Quality Assurance",
  },
  {
    id: 8,
    image: "https://www.icreativez.com/assets/images/branding-icon.png",
    bgImage: brandingg,
    title: "Branding",
  },
  {
    id: 9,
    image: "https://www.icreativez.com/assets/images/Digital%20Marketing.png",
    bgImage: Dmarketing,
    title: "Full-Stack Developers",
  },
  {
    id: 11,
    image: "https://www.icreativez.com/assets/images/branding-icon.png",
    bgImage: brandingg,
    title: ".Net Developers",
  },
  {
    id: 12,
    image: "https://www.icreativez.com/assets/images/branding-icon.png",
    bgImage: brandingg,
    title: "PHP Developers",
  },
];

const OurServices = () => {
  const [services, setServices] = useState(initialServices);
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(!showMore);
    setServices(
      showMore ? initialServices : [...initialServices, ...moreServices]
    );
  };

  return (
    <div className={`services-section ${showMore ? "expanded" : ""}`}>
      <div className="text-start ps-5 ">
        <h5 className="text-uppercase red-heading text-start px-lg-5">
          Our Services
        </h5>
        <h2 className="fw-bold mb-5 text-dark text-start">
          Transform Your Ideas
        </h2>
      </div>

      <div className="services-container">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            bgImage={service.bgImage}
            title={service.title}
          />
        ))}
      </div>

      <div className="d-flex justify-content-center mt-5">
        <button className="primary-btn--outline  mt-3" onClick={handleViewMore}>
          {showMore ? "View Less" : "View More Services"}
          {showMore ? (
            <FaChevronUp className="icon" />
          ) : (
            <FaChevronDown className="icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default OurServices;
