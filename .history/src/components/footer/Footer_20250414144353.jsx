import React, { useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/icreativez_logo/icreativez (1).png";
import FooterLinkItems from "./FooterLinkItems";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  const menuItems = [
    {
      title: "Company",
      links: [
        { name: "Home", url: "/home" },
        { name: "About", url: "/about" },
        { name: "Careers", url: "/careers" },
      ],
    },
    {
      title: "Services and Solutions",
      links: [
        { name: "Website Design", url: "/services/web-development" },
        { name: "SEO Services", url: "/services/seo" },
        { name: "Digital Marketing", url: "/services/marketing" },
        { name: "Software Development", url: "#" },
        { name: "Mobile App Development", url: "#" },
        { name: "E-commerce Solutions", url: "/services/e-commerce" },
        { name: "Software Quality Assurance", url: "#" },
        { name: "Branding", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blogs", url: "/blog" },
        { name: "Case Studies", url: "#" },
      ],
    },
  ];

  // links list items
  const moreLinks3 = [
    { text: "SEO Case Studies", url: "/seo-case-studies" },
    { text: "SEO Quotes", url: "/seo-quotes" },
    { text: "PHP Development Services", url: "/php-development" },
    { text: "Logo Design Services", url: "/logo-design" },
    {
      text: "Microsoft Certified dot net(.net) developers",
      url: "/dot-net-developers",
    },
    { text: "Web Design Packages", url: "/web-design" },
    {
      text: "Top Digital Marketing Agencies in Pakistan",
      url: "/digital-marketing-pakistan",
    },
  ];

  const quickLinks2 = [
    { text: "Complaint Management System Application", url: "/complaint" },
    { text: "Request For Quote", url: "/request-quote" },
    { text: "Database Providers", url: "/database-providers" },
    { text: "Blogs", url: "/blog" },
    { text: "Careers/Jobs", url: "/careers" },
    { text: "Content Marketing Agency", url: "/content-marketing" },
    { text: "Why SEO Is Important", url: "/why-seo" },
    {
      text: "5 Top Experienced Facebook Marketing Experts",
      url: "/facebook-experts",
    },
    {
      text: "Top High Experienced Freelance SEO Consultants",
      url: "/freelance-seo",
    },
    { text: "Top PPC Experts", url: "/ppc-experts" },
    { text: "Top SEO Consultants", url: "/seo-consultants" },
    { text: "Best Shopify SEO Experts", url: "/shopify-seo" },
    {
      text: "Top Social Media Content Creators",
      url: "/social-media-creators",
    },
    { text: "Best Technical SEO Consultants", url: "/technical-seo" },
    { text: "Top SEO Experts In Dubai", url: "/seo-dubai" },
    {
      text: "Top Digital Marketing Agencies in Karachi",
      url: "/digital-marketing-karachi",
    },
  ];

  const quickLinks1 = [
    { text: "Digital Marketing Services", url: "#" },
    { text: "Local SEO Packages", url: "#" },
    { text: "Top 11 SEO Experts In The World", url: "#" },
    { text: "Top SEO Experts in Toronto", url: "#" },
    { text: "Top 10 SEO Experts In London", url: "#" },
    { text: "Top 10 SEO Experts In Pakistan", url: "#" },
    { text: "10 Top Software Companies in Pakistan", url: "#" },
    { text: "SEO SEO Company in Karachi", url: "#" },
    { text: "SEO Packages in Pakistan", url: "#" },
    { text: "Software Houses in Lahore", url: "#" },
    { text: "Icreativez CEO Interview", url: "#" },
    { text: "Google Certified SEO Expert", url: "#" },
    { text: "Digital Marketing Experts", url: "#" },
    { text: "Top 10 Digital Marketing Courses In Karachi", url: "#" },
    { text: "Top 10 SEO Services Providers In Lahore", url: "#" },
    { text: "Top 10 Software Houses In Islamabad", url: "#" },
    { text: "Top 10 Software Houses In Karachi", url: "#" },
    { text: "Top 10 ASP.NET Developers in the world", url: "#" },
  ];
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section with Logo & Dropdowns */}
        <div className="row top-footer">
          <div className="col-md-3">
            <img src={logo} alt="Company Logo" className="footer-logo" />
          </div>
          <div className="col-md-9 d-flex justify-content-around footer-menu">
            {menuItems.map((menu, index) => (
              <div className="dropdown" key={index}>
                <button
                  className="dropdown-btn"
                  onClick={() => toggleDropdown(menu.title)}
                >
                  {menu.title}{" "}
                  <FontAwesomeIcon
                    className="dropdown-icon"
                    icon={
                      openDropdown === menu.title ? faChevronUp : faChevronDown
                    }
                  />
                </button>

                {openDropdown === menu.title && (
                  <div className="dropdown-content">
                    {menu.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        className={i === 0 ? "active-link" : ""}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section with 4 Address Columns */}
        <div className="row">
          <div className="col-md-3 col-sm-6 mt-2">
            <h5>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="me-2 contact-icon "
              />
              Bahria Town Karachi, Sindh, Pakistan
            </h5>
            <p>
              Office#108, Office#207, Office#208 & Office#805, Dominion Business
              center 1, 34 b, Jinnah Ave
              <br />
              Bahria Town Karachi, Sindh, Pakistan
            </p>

            <div className="flex-column">
              <h5>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="me-2 contact-icon mt-3"
                />
                Jamshoro, Sindh, Pakistan
              </h5>
              <p>Software Technology Park, Jamshoro, Sindh, Pakistan</p>

              <h5>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="me-2 contact-icon mt-3"
                />
                Nawab Shah, Sindh, Office
              </h5>
              <p>
                Software Technology Park, QUEST, Nawab Shah, Sindh, Pakistan
              </p>

              <h5>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="me-2 contact-icon mt-3"
                />
                Mirpurkhas, Sindh Office
              </h5>
              <p>
                IBA Campus, Software Technology Park, MirpurKhas, Sindh,
                Pakistan
              </p>

              <h5>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-2 contact-icon mt-4"
                />
                For Clients:
                <br />
                <span className="fw-lighter small">
                  client.contact@icreativez.com
                </span>
              </h5>

              <h5>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-2 contact-icon mt-3"
                />
                For Job Seekers:
                <span className="fw-lighter small"> hr@icreativez.com</span>
              </h5>

              <h5>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="me-2 contact-icon mt-3"
                />
                Contact Us
              </h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mt-2">
            <FooterLinkItems title="Useful Links" links={moreLinks3} />
          </div>
          <div className="col-md-3 col-sm-6 mt-2">
            <FooterLinkItems title="Useful Links" links={quickLinks1} />
          </div>

          <div className="col-md-3 col-sm-6 mt-2">
            <FooterLinkItems title="Quick Links" links={quickLinks2} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row bottom-footer">
          <div className="col-md-6 text-start">
            <p className="policy">
              <a href="#">
                Copyright 2025{" "}
                <span style={{ color: "var(--primary-color)" }}>
                  Icreativez Technologies{" "}
                </span>
                |{" "}
              </a>
              <a href="#">Terms and Conditions</a> |{" "}
              <a href="https://www.icreativez.com/privacy-policy.html">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="col-md-6 text-end social-icons">
            <a href="https://www.facebook.com/icreativez/?_rdc=1&_rdr#">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+923100007149&text=Hello%20Icreativez%20Tech%20Global%20team,%20I%20contacted%20you%20through%20your%20website%20for%2025%%20OFF%20New%20Year%202025%20Sale%20via%20Website%20Page:%20https://www.icreativez.com/Default.aspx">
              <i className="fab fa-whatsapp fa-lg "></i>
            </a>
            <a href="https://www.linkedin.com/company/icreativez/">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/icreativeztechnologies/profilecard/">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#">
              <i className="fab fa-x-twitter fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
