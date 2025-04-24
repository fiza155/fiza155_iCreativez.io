import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hireExpertOpen, setHireExpertOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [digitalMarketingOpen, setDigitalMarketingOpen] = useState(false);

  return (
    <nav className="custom-navbar navbar navbar-expand-lg">
      <div className="container-fluid ">
        {/* <a className="navbar-brand text-white" href="#">
          About Us
        </a> */}
        <button
          className="navbar-toggler d-lg-none ms-auto border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav text-start">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Success Stories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>

            {/* Services Dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a
                className="nav-link d-flex align-items-center"
                href="#"
                role="button"
              >
                Services
                <span className="ms-1 small">
                  {servicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </a>
              <ul className={`dropdown-menu  ${servicesOpen ? "show" : ""}`}>
                <li>
                  <a className="dropdown-item drop" href="#">
                    Website Designing Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mobile App Development Company
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Custom Software Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Software Quality Assurance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    IT Consultancy and Support Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    SharePoint Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    E-Commerce Solutions
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Web Research Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    WordPress Web Development Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Website Maintenance Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </li>

            {/* Digital Marketing Dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setDigitalMarketingOpen(true)}
              onMouseLeave={() => setDigitalMarketingOpen(false)}
            >
              <a
                className="nav-link d-flex align-items-center"
                href="#"
                role="button"
              >
                Digital Marketing
                <span className="ms-1 small">
                  {digitalMarketingOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </a>
              <ul
                className={`dropdown-menu ${
                  digitalMarketingOpen ? "show" : ""
                }`}
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Digital Marketing Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Search Engine Optimization
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Google Ads Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Social Media Marketing Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Video Animation Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Branded SMS Services
                  </a>
                </li>
              </ul>
            </li>

            {/* Hire Expert Dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setHireExpertOpen(true)}
              onMouseLeave={() => setHireExpertOpen(false)}
            >
              <a
                className="nav-link d-flex align-items-center"
                href="#"
                role="button"
              >
                Hire Expert
                <span className="ms-1 small">
                  {hireExpertOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </a>
              <ul className={`dropdown-menu ${hireExpertOpen ? "show" : ""}`}>
                <li>
                  <a className="dropdown-item  " href="#">
                    International SEO Consultant
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Local SEO Expert
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dedicated Developers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dot Net Developers
                  </a>
                </li>
              </ul>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
