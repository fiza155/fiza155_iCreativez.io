import React from "react";
import "./Button.css";

const CustomButton = ({ children, className, ...props }) => {
  return (
    <button className={`primary-btn ${className || ""}`} {...props}>
      {children}
    </button>

    // <button className={className} {...props}>
    //   {children}
    // </button>
  );
};

export default CustomButton;
