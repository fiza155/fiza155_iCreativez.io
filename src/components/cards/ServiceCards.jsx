import React, { useState } from "react";
import "./ServiceCards.css";

const ServiceCard = ({ image, title, bgImage }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`service-card ${hover ? "hover" : ""}`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="overlay"></div>
      <img src={image} alt={title} className="service-card-image" />
      <h4 className="card-heading">{title}</h4>
    </div>
  );
};

export default ServiceCard;
