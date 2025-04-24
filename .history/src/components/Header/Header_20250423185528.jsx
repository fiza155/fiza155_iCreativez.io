import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoGif from "../../assets/images/Web-Development-Company-in-Pakistan.gif";
import "./Header.css";
import CustomButton from "../button/Button";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid  ps-sm-5">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={LogoGif} alt="Logo" className="img-fluid logo px-5  " />
        </a>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div
          className={`collapse navbar-collapse ${
            !isNavCollapsed ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <a className="header-nav" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="header-nav" href="#">
                News & Events
              </a>
            </li>
            <li className="nav-item">
              <a className="header-nav" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <span className="header-nav ">
                24/7 Service Email:{" "}
                <a href="mailto:client.contact@icreativez.com">
                  <span className="fw-bold text-decoration-none text-dark">
                    client.contact@icreativez.com
                  </span>
                </a>
              </span>
            </li>
            <li className="nav-item">
              <CustomButton
                className="fw-normal d-flex justify-content-center align-items-center primary-btn--outline"
                style={{ fontSize: "13.5px", padding: "10px 19px" }}
              >
                Explore Career
              </CustomButton>
            </li>
            <li className="nav-item">
              <CustomButton
                className="fw-normal d-flex justify-content-center align-items-center primary-btn--outline"
                style={{ fontSize: "13.5px", padding: "10px 19px" }}
              >
                Let's Talk Business
              </CustomButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
