import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoGif from "../../assets/images/Web-Development-Company-in-Pakistan.gif";
import "./Header.css";
import Button from "../button/Button";
import CustomButton from "../button/Button";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md bg-white px-">
      <div className="container-fluid px-5 d-flex justify-content-center align-items-center">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={LogoGif} alt="Logo" className="img-fluid logo px-2" />
        </a>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="header-nav d-md-block d-sm-bloc" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item  ">
              <a className="header-nav d-md-block" href="#">
                News
              </a>
            </li>
            <li className="nav-item ">
              <a className="header-nav d-md-block" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <span className="header-nav text-decoration-none text-dark d-md-block">
                24/7 Service Email:{" "}
                <a href="mailto:client.contact@icreativez.com">
                  <span className="header-nav text-decoration-none fw-bold">
                    client.contact@icreativez.com
                  </span>
                </a>
              </span>
            </li>
            <li className="nav-item">
              <CustomButton
                className="py-2 px-3 fw-normal d-flex justify-content-center align-items-center"
                style={{ fontSize: "13.5px" }}
              >
                Explore Career
              </CustomButton>
            </li>
            <li className="nav-item">
              <CustomButton
                className="fw-normal primary-btn--outline d-flex justify-content-center align-items-center"
                style={{ fontSize: "13.5px", padding: "px" }}
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
