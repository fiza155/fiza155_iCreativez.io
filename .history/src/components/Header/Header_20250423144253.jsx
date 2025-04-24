import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoGif from "../../assets/images/Web-Development-Company-in-Pakistan.gif";
import "./Header.css";
import Button from "../button/Button";
import CustomButton from "../button/Button";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md bg-white px-5 ">
      <div className="container-fluid px-5">
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
                Free Consultancy
              </a>
            </li>
            <li className="nav-item  ">
              <a className="header-nav d-md-block" href="#">
                Request for Demo
              </a>
            </li>
            <li className="nav-item ">
              <a className="header-nav d-md-block" href="#">
                Request for Quote
              </a>
            </li>
            <li className="nav-item">
              {/* <span className="header-nav text-decoration-none text-dark d-md-block">
                24/7 Service Email:{" "}
                <a href="mailto:client.contact@icreativez.com">
                  <span className="header-nav text-decoration-none fw-bold">
                    client.contact@icreativez.com
                  </span>
                </a>
              </span> */}
              <CustomButton className="py-2 px-2">Explore Career</CustomButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
