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
    <div className="container my-2 contact-form-wrapper">
      <div className="row g-5">
        {/* Left Side - Contact Form */}
        <div className="col-lg-6 small fw-semibold">
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
                <input type="text" className="form-control " required />
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
                  {/* Add more countries if needed   */}
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
              <select className="form-select" required>
                <option value="" className="mute">
                  Select Your Budget
                </option>
                <option value="<500">{"<"}$500</option>
                <option value="500-1000">$500 - $1000</option>
                <option value="1000-5000">$1000 - $5000</option>
                <option value="5000-10000">$5000 - $10000</option>
                <option value="10000+">$10000+</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Company Name<span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Company URL<span className="text-danger">*</span>
              </label>
              <input type="url" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Region<span className="text-danger">*</span>
              </label>
              <select className="form-select" required>
                <option value="" className="mute">
                  Select Your Region
                </option>
                <option value="North America">North America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Australia">Australia</option>
                <option value="Africa">Africa</option>
                <option value="South America">South America</option>
              </select>
            </div>

            <div className="mb-3 ">
              <label className="form-label">
                Services You're Looking For
                <span className="text-danger">*</span>
              </label>
              <div className="row fw-normal">
                <div className="col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remoteIT"
                    />
                    <label className="form-check-label" htmlFor="remoteIT">
                      Remote IT Resources
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="webDev"
                    />
                    <label className="form-check-label" htmlFor="webDev">
                      Web Development
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="arVr"
                    />
                    <label className="form-check-label" htmlFor="arVr">
                      SQA Development
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="cyberSecurity"
                    />
                    <label className="form-check-label" htmlFor="cyberSecurity">
                      Digital Marketing
                    </label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customSoft"
                    />
                    <label className="form-check-label" htmlFor="customSoft">
                      Custom Software Development
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="mobileApp"
                    />
                    <label className="form-check-label" htmlFor="mobileApp">
                      Mobile App Development
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gaming"
                    />
                    <label className="form-check-label" htmlFor="gaming">
                      SEO Services
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="otherIT"
                    />
                    <label className="form-check-label" htmlFor="otherIT">
                      Other IT Services
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Project Details<span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                rows="2"
                placeholder="Provide a brief description of your project"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <ReCAPTCHA
                sitekey="6Lc_aX0UAAAAABXzCk8Xkxxxxxxxxxxxxxxxxxxxxxx"
                onChange={handleCaptchaChange}
              />
            </div>

            <button type="submit" className=" btn-submit w-25 ">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Global Presence and Global Leaders */}
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <div className="info-section text-start mb-5">
            <div className="">
              <i className="bi bi-globe2 form-heading icon"></i>
            </div>
            <h3 className="form-heading">Global Presence</h3>
            <p className="">
              We're across 5 continents. Explore our office nearest to you.
            </p>
            <CustomButton className="mt-3 px-4 py-3">Learn more</CustomButton>
          </div>

          <div className="info-section text-start">
            <div className="">
              <i className="bi bi-people-fill  icon"></i>
            </div>
            <h3 className="form-heading">Global Clients</h3>
            <p className="">
              Our leadership team brings decades of experience driving
              innovation globally.
            </p>
            <CustomButton className="mt-3 px-4 py-3">Learn more</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
