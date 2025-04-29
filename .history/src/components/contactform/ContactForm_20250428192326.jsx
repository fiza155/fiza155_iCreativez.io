import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactForm.css"; // Custom CSS
import CustomButton from "../../components/button/Button";

const ContactForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="container my-5 contact-form-wrapper">
      <div className="row g-5">
        {/* Left Side - Contact Form */}
        <div className="col-lg-6">
          <h2 className="form-heading">Ready To Get Started</h2>
          <p className="form-subheading">
            Connect with us to explore how we can deliver exceptional IT
            solutions for your needs.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  First Name<span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Last Name<span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" required />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Email<span className="text-danger">*</span>
              </label>
              <input type="email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Phone Number<span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <select className="form-select" style={{ maxWidth: "140px" }}>
                  <option value="PK">Pakistan (پاکستان)</option>
                  {/* Add more countries if needed */}
                </select>
                <input
                  type="text"
                  className="form-control"
                  placeholder="+92"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Budget<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Budget"
                required
              />
            </div>

            <div className="mb-4">
              <ReCAPTCHA
                sitekey="YOUR_SITE_KEY" // Replace with your site key
                onChange={handleCaptchaChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Global Presence and Global Leaders */}
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <div className="info-section text-start mb-5">
            <div className="icon-wrapper">
              <i className="bi bi-globe2 icon"></i>
            </div>
            <h3 className="info-title">Global Presence</h3>
            <p className="info-text">
              We're across 5 continents. Explore our office nearest to you.
            </p>
            <CustomButton className="mt-3 px-2 py-3"> Learn more</CustomButton>
          </div>

          <div className="info-section text-start">
            <div className="icon-wrapper">
              <i className="bi bi-people-fill icon"></i>
            </div>
            <h3 className="info-title">Global Leaders</h3>
            <p className="info-text">
              Our leadership team brings decades of experience driving
              innovation globally.
            </p>
            <CustomButton className="mt-3"> Learn more</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
