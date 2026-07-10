function Skills() {

  /* FRONTEND */

const frontend = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Bootstrap"
];

/* BACKEND */

const backend = [
  "Python",
  "Flask",
  "MySQL",
  "Firebase"
];

/* DATA & ANALYTICS */

const analytics = [
  "Microsoft Excel",
  "Power BI",
  "SQL"
];

/* TOOLS */

const tools = [
  "Git",
  "GitHub",
  "VS Code",
  "Selenium",
  "Android Studio",
  "Flutter",
  "XAMPP",
  "MySQL Workbench",
];
  return (
    <div id="skills" style={container}>

      {/* HEADING */}

      <h2 style={heading}>
        Skills
      </h2>

      {/* FRONTEND */}

      <div style={categoryBox}>

        <h3 style={categoryTitle}>
          Frontend
        </h3>

        <div style={skillsContainer}>
          {frontend.map((skill, index) => (
            <div key={index} style={skillCard}>
              {skill}
            </div>
          ))}
        </div>

      </div>

      {/* BACKEND */}

      <div style={categoryBox}>

        <h3 style={categoryTitle}>
          Backend
        </h3>

        <div style={skillsContainer}>
          {backend.map((skill, index) => (
            <div key={index} style={skillCard}>
              {skill}
            </div>
          ))}
        </div>

      </div>

      {/* ANALYTICS */}

      <div style={categoryBox}>

        <h3 style={categoryTitle}>
          Analytics
        </h3>

        <div style={skillsContainer}>
          {analytics.map((skill, index) => (
            <div key={index} style={skillCard}>
              {skill}
            </div>
          ))}
        </div>

      </div>

      {/* TOOLS */}

      <div style={categoryBox}>

        <h3 style={categoryTitle}>
          Tools
        </h3>

        <div style={skillsContainer}>
          {tools.map((skill, index) => (
            <div key={index} style={skillCard}>
              {skill}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Skills;

/* MAIN CONTAINER */

const container = {
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "100px 20px",
  textAlign: "center"
};

/* HEADING */

const heading = {
  fontSize: "42px",
  marginBottom: "60px",
  background: "linear-gradient(90deg, #8a2be2, #00f7ff)",
  WebkitBackgroundClip: "text",
  color: "transparent"
};

/* CATEGORY BOX */

const categoryBox = {
  marginBottom: "50px",
  padding: "30px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(0,255,255,0.1)",
  backdropFilter: "blur(10px)"
};

/* CATEGORY TITLE */

const categoryTitle = {
  fontSize: "26px",
  marginBottom: "30px",
  color: "#ffffff"
};

/* SKILLS CONTAINER */

const skillsContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "18px"
};

/* SKILL CARD */

const skillCard = {
  padding: "14px 24px",
  borderRadius: "12px",
  border: "1px solid rgba(0,255,255,0.3)",
  background: "rgba(255,255,255,0.04)",
  color: "#00f7ff",
  fontSize: "16px",
  fontWeight: "500",
  transition: "0.3s",
  boxShadow: "0 0 12px rgba(0,255,255,0.08)"
};