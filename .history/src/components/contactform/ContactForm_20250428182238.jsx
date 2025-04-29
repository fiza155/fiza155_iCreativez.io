import React, { useState } from "react";
import "./ContactForm.css"; // Assuming you have a CSS file for styling
const ContactForm = () => {
  const [formData, setFormData] = useState({
    phone: "",
    countryCode: "+92",
    budget: "",
    companyName: "",
    companyUrl: "",
    region: "",
    services: [],
    projectDetails: "",
    jobInterest: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "services") {
      setFormData((prevState) => {
        if (prevState.services.includes(value)) {
          return {
            ...prevState,
            services: prevState.services.filter((service) => service !== value),
          };
        } else {
          return { ...prevState, services: [...prevState.services, value] };
        }
      });
    } else if (type === "checkbox" && name === "jobInterest") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {/* Phone Number */}
      <div className="form-group">
        <label>
          Phone Number<span>*</span>
        </label>
        <div className="phone-group">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
          >
            <option value="+92">Pakistan (+92)</option>
            <option value="+1">USA (+1)</option>
            <option value="+44">UK (+44)</option>
            {/* Add more countries */}
          </select>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Budget */}
      <div className="form-group">
        <label>
          Budget<span>*</span>
        </label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
        >
          <option value="">Select Budget</option>
          <option value="Less than $1000">Less than $1000</option>
          <option value="$1000 - $5000">$1000 - $5000</option>
          <option value="$5000 - $10000">$5000 - $10000</option>
          <option value="Above $10000">Above $10000</option>
        </select>
      </div>

      {/* Company Name */}
      <div className="form-group">
        <label>
          Company Name<span>*</span>
        </label>
        <input
          type="text"
          name="companyName"
          placeholder="Enter your company name"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Company URL */}
      <div className="form-group">
        <label>Company Domain / URL</label>
        <input
          type="url"
          name="companyUrl"
          placeholder="Enter your company domain"
          value={formData.companyUrl}
          onChange={handleChange}
        />
      </div>

      {/* Region */}
      <div className="form-group">
        <label>
          Region<span>*</span>
        </label>
        <select
          name="region"
          value={formData.region}
          onChange={handleChange}
          required
        >
          <option value="">Please Select</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          {/* Add more regions */}
        </select>
      </div>

      {/* Services */}
      <div className="form-group">
        <label>
          Services you're looking for<span>*</span>
        </label>
        <div className="checkbox-group">
          {[
            "Remote IT Resources",
            "Custom Software Development",
            "Web Development",
            "Mobile App Development",
            "AR/VR",
            "Gaming",
            "Cyber Security",
            "Other IT Services",
          ].map((service) => (
            <label key={service}>
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleChange}
              />
              {service}
            </label>
          ))}
        </div>
      </div>

      {/* Project Details */}
      <div className="form-group">
        <label>
          Project Details<span>*</span>
        </label>
        <textarea
          name="projectDetails"
          placeholder="Describe your project"
          value={formData.projectDetails}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {/* Job Interest */}
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="jobInterest"
            checked={formData.jobInterest}
            onChange={handleChange}
          />
          I am looking for a job at Devsinc
        </label>
      </div>

      {/* Submit */}
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
