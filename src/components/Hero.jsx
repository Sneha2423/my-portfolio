import { useState, useEffect } from "react";
import profile from "../assets/profile.jpeg";

function Hero() {
  const roles = [
    "Web Developer",
    "Python Developer",
    "App Developer",
    "Data Analyst"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(roles[index].slice(0, i++));

      if (i > roles[index].length) {
        clearInterval(interval);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1000);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div id="home" style={container}>

      {/* LEFT SECTION */}
      <div style={leftSection}>

        <h1 style={heading}>
          Sneha Bawachkar
        </h1>

        <p style={role}>
          {text}
        </p>

        <p style={about}>
          Passionate developer focused on building scalable
          web applications, modern user experiences,
          and data-driven solutions using cutting-edge
          technologies. Continuously learning, creating,
          and improving through real-world projects
          and problem solving.
        </p>

        {/* BUTTONS */}
        <div style={socialContainer}>

          <a
            href="https://github.com/Sneha2423"
            target="_blank"
            rel="noreferrer"
            style={resumeBtn}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sneha-bawachkar"
            target="_blank"
            rel="noreferrer"
            style={resumeBtn}
          >
            LinkedIn
          </a>

          <a
            href="/Sneha_B.pdf"
            target="_blank"
            rel="noreferrer"
            style={resumeBtn}
          >
            Resume
          </a>

        </div>

      </div>

      {/* RIGHT SECTION */}
      <div style={rightSection}>

        <img
          src={profile}
          alt="Sneha"
          style={imageStyle}
        />

      </div>

    </div>
  );
}

export default Hero;

/* MAIN CONTAINER */

const container = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "70px",
  padding: "80px 40px",
  maxWidth: "1200px",
  margin: "0 auto",
  flexWrap: "wrap"
};

/* LEFT SECTION */

const leftSection = {
  flex: "1",
  minWidth: "300px"
};

/* HEADING */

const heading = {
  fontSize: "clamp(40px, 5vw, 68px)",
  fontWeight: "700",
  background: "linear-gradient(90deg, #8a2be2, #00f7ff)",
  WebkitBackgroundClip: "text",
  color: "transparent",
  marginBottom: "18px",
  lineHeight: "1.1",
  letterSpacing: "-1px"
};

/* ROLE */

const role = {
  color: "#00f7ff",
  fontSize: "22px",
  minHeight: "32px",
  letterSpacing: "1px",
  fontWeight: "500"
};

/* ABOUT */

const about = {
  color: "#9da7b3",
  marginTop: "28px",
  maxWidth: "650px",
  lineHeight: "1.9",
  fontSize: "18px"
};

/* BUTTONS CONTAINER */

const socialContainer = {
  display: "flex",
  gap: "18px",
  marginTop: "40px",
  flexWrap: "wrap"
};

/* BUTTON STYLE */

const resumeBtn = {
  color: "white",
  textDecoration: "none",
  padding: "13px 26px",
  borderRadius: "14px",
  background: "linear-gradient(90deg, #8a2be2, #00f7ff)",
  fontWeight: "600",
  boxShadow: "0 0 18px rgba(0,255,255,0.18)",
  transition: "0.3s ease",
  fontSize: "15px",
  letterSpacing: "0.5px"
};

/* RIGHT SECTION */

const rightSection = {
  flex: "1",
  display: "flex",
  justifyContent: "center",
  minWidth: "300px"
};

/* PROFILE IMAGE */

const imageStyle = {
  width: "340px",
  height: "340px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid #00f7ff",
  boxShadow: `
    0 0 20px rgba(0,255,255,0.25),
    0 0 50px rgba(138,43,226,0.2)
  `
};