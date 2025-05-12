import React from "react";
import AboutUsImg from "../../assets/images/aboutUs/icreativez-story-new.png";

const AboutUsHero = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <img
        src={AboutUsImg}
        alt="About Us"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "900px",
          height: "220px",
          backgroundColor: "rgba(224, 221, 221, 0.6)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#000",
          textAlign: "center",
          padding: "12px",
          borderRadius: "8px",
        }}
      >
        <h1
          style={{
            fontSize: "2.7rem",
            letterSpacing: "2px",
            fontWeight: "semibold",
            margin: 0,
            color: "#000",
          }}
        >
          A Decade of Digital Transformation
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "800px",
            fontWeight: "500",
            margin: 0,
          }}
        >
          From a one-person company to a global Tech & Digital brand with a team
          of over 220 talented professionals, 5 locations, and clients in 19
          countries.
        </p>
      </div>
    </div>
  );
};

export default AboutUsHero;
