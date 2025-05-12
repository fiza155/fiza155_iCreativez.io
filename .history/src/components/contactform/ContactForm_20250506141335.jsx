import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactForm.css";
import CustomButton from "../../components/button/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    company: "",
    url: "",
    region: "",
    services: [],
    project: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedDialCode, setSelectedDialCode] = useState("+92"); // Default to Pakistan
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };
  useEffect(() => {
    // Fetch the country data from the GitHub Gist
    fetch(
      "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/CountryCodes.json"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching country data:", error));
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.budget) newErrors.budget = "Please select your budget";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.url.trim()) newErrors.url = "Company URL is required";
    if (!formData.region) newErrors.region = "Please select a region";
    if (formData.services.length === 0)
      newErrors.services = "Select at least one service";
    if (!formData.project.trim())
      newErrors.project = "Project details are required";
    if (!captcha) newErrors.captcha = "Please verify captcha";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully", formData);
      // Handle submission logic
    }
  };
  return (
    <div className="container my-2 contact-form-wrapper">
      <div className="row g-5">
        {/* Left Side - Contact Form */}
        <div className="col-lg-6 small fw-semibold">
          <h2 className="form-heading">Let's Begin Your Journey</h2>
          <p className="form-subheading">
            Reach out to us, we can provide outstanding IT solutions tailored to
            your requirements.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  First Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control small ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <div className="invalid-feedback d-block">
                    {errors.firstName}
                  </div>
                )}
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Last Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter your email address"
                required
              />
              {errors.email && (
                <div className="invalid-feedback d-block ">{errors.email}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">
                Phone Number<span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <select
                  className="form-select"
                  style={{ maxWidth: "140px" }}
                  value={selectedDialCode}
                  onChange={(e) => setSelectedDialCode(e.target.value)}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.dial_code}>
                      {country.name} ({country.dial_code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
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
              <input
                type="text"
                className="form-control"
                placeholder="Enter your company name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Company URL<span className="text-danger">*</span>
              </label>
              <input
                type="url"
                className="form-control"
                placeholder="Enter your company URL"
                required
              />
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
                <option value="South America">South America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Australia">Australia</option>
                <option value="Africa">Africa</option>
                <option value="Middle East">Middle East</option>
                <option value="Central America">Central America</option>
                <option value="Caribbean">Caribbean</option>
                <option value="Eastern Europe">Eastern Europe</option>
                <option value="Western Europe">Western Europe</option>
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
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleCaptchaChange}
              />
            </div>

            <button type="submit" className=" btn-submit  ">
              Submit
            </button>
          </form>
        </div>
        {/* Right Side - Global Presence and Global Leaders */}
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <div className="info-section text-start mb-5">
            <div className="">
              <i className="bi bi-globe2 icon-wrapper icon"></i>
            </div>
            <h3 className="form-heading">Global Presence</h3>
            <p className="">
              We're across 5 continents. Explore our office nearest to you.
            </p>
            <CustomButton className="mt-3 px-4 py-3">Learn more</CustomButton>
          </div>

          <div className="info-section text-start">
            <div className="">
              <i className="bi bi-people-fill icon-wrapper icon"></i>
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
