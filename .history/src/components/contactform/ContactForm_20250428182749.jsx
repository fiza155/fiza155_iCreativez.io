import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactForm.css"; // Custom CSS

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
    // Handle form submission
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Form Section */}
        <div className="col-md-6">
          <h2 className="form-heading">Ready To Get Started</h2>
          <p className="form-subheading">
            Connect with us to explore how we can deliver exceptional IT
            solutions for your needs.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                First Name<span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Last Name<span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" required />
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
                <select className="form-select" style={{ maxWidth: "150px" }}>
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

            {/* reCAPTCHA */}
            <div className="mb-3">
              <ReCAPTCHA
                sitekey="YOUR_SITE_KEY" // <-- Replace with your real site key
                onChange={handleCaptchaChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Global Presence and Leaders */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
          {/* Global Presence Section */}
          <div className="global-presence text-center mb-5">
            <i className="bi bi-globe2 display-4 mb-3"></i>{" "}
            {/* Bootstrap Icons */}
            <h3 className="global-title">Global Presence</h3>
            <p className="global-text">
              We're across 5 continents, explore our office nearest to you.
            </p>
          </div>

          {/* Global Leaders Section */}
          <div className="global-leaders text-center">
            <i className="bi bi-people-fill display-4 mb-3"></i>
            <h3 className="global-title">Global Leaders</h3>
            <p className="global-text">
              Our leadership team brings decades of experience driving
              innovation globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
