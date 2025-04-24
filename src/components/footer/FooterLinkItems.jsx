import React from "react";

const FooterLinkItems = ({ title, links }) => {
  return (
    <div className="row">
      <h5 className="pb-2">{title}</h5>
      <ul className="list-unstyled">
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <i className="fas fa-arrow-right me-2"></i>
            <a href={link.url} className="text-dark text-decoration-none">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkItems;
