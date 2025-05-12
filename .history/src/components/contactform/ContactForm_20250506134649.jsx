import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactForm.css";
import CustomButton from "../../components/button/Button";

const ContactForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedDialCode, setSelectedDialCode] = useState("+92");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyUrl: "",
    companyName: "",
    region: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/CountryCodes.json"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching country data:", error));
  }, []);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlRegex =
      /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\-\.\?\=\&]*)*\/?$/;

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!urlRegex.test(formData.companyUrl))
      newErrors.companyUrl = "Invalid company URL";
    if (!/^\d{7,15}$/.test(phoneNumber))
      newErrors.phone = "Phone number must be 7-15 digits";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company Name is required";
    if (!formData.region) newErrors.region = "Region is required";
    if (!formData.projectDetails.trim())
      newErrors.projectDetails = "Project details are required";

    if (!captchaValue) newErrors.captcha = "Please complete the reCAPTCHA";

    // Checkboxes
    const checkedServices = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    if (checkedServices.length === 0)
      newErrors.services = "Select at least one service";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    alert("Form Submitted Successfully!");
    // Continue submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* First Name */}
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          name="firstName"
          type="text"
          className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && (
          <div className="invalid-feedback">{errors.firstName}</div>
        )}
      </div>

      {/* Email */}
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          name="email"
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      {/* Company URL */}
      <div className="mb-3">
        <label className="form-label">Company URL</label>
        <input
          name="companyUrl"
          type="url"
          className={`form-control ${errors.companyUrl ? "is-invalid" : ""}`}
          value={formData.companyUrl}
          onChange={handleChange}
        />
        {errors.companyUrl && (
          <div className="invalid-feedback">{errors.companyUrl}</div>
        )}
      </div>

      {/* Phone Number */}
      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input
          type="tel"
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>

      {/* Services */}
      {errors.services && (
        <div className="text-danger mb-2">{errors.services}</div>
      )}

      {/* CAPTCHA */}
      <div className="mb-3">
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={handleCaptchaChange}
        />
        {errors.captcha && (
          <div className="text-danger mt-2">{errors.captcha}</div>
        )}
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactForm;
