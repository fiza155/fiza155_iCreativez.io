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
    <div className="container my-4 contact-form-wrapper">
      <div className="row g-4">
        {/* Left Side - Contact Form */}
        <div className="col-lg-6 small fw-semibold">
          <h2 className="form-heading fs-5">Ready To Get Started</h2>
          <p className="form-subheading small mb-3">
            Connect with us to explore how we can deliver exceptional IT
            solutions for your needs.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-2">
                <label className="form-label small">
                  First Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  required
                />
              </div>
              <div className="col-md-6 mb-2">
                <label className="form-label small">
                  Last Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  required
                />
              </div>
            </div>

            <div className="mb-2">
              <label className="form-label small">
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control form-control-sm"
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label small">
                Phone Number<span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <select
                  className="form-select form-select-sm"
                  style={{ maxWidth: "120px" }}
                >
                  <option value="PK">Pakistan (پاکستان)</option>
                </select>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="+92"
                  required
                />
              </div>
            </div>

            {/* Other form elements... */}

            <div className="mb-2">
              <label className="form-label small">
                Services You're Looking For
                <span className="text-danger">*</span>
              </label>
              <div className="row fw-normal small">
                <div className="col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remoteIT"
                      style={{ transform: "scale(0.8)" }}
                    />
                    <label className="form-check-label" htmlFor="remoteIT">
                      Remote IT Resources
                    </label>
                  </div>
                  {/* Repeat for other checkboxes with style={{ transform: "scale(0.8)" }} */}
                </div>
                <div className="col-6">{/* Checkboxes column 2 */}</div>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-submit btn-sm w-25 small">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side Content... */}
      </div>
    </div>
  );
};

export default ContactForm;
