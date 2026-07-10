function Projects() {
  return (
    <div id="projects" style={container}>

      <h2 style={heading}>Projects</h2>

      {/* Project 1 */}
      <div style={card}>

        <h3 style={title}>
          Selenium Automation Framework
        </h3>

        <p style={description}>
          Automated testing framework built using Selenium
          WebDriver with Java for browser automation and
          scalable testing workflows.
        </p>

        <a
          href="https://github.com/Sneha2423/selenium-automation-framework"
          target="_blank"
          rel="noreferrer"
          style={button}
        >
          View Project
        </a>

      </div>

      {/* Project 2 */}
      <div style={card}>

        <h3 style={title}>
          Placement Management System
        </h3>

        <p style={description}>
          Developed a full-stack Placement Management System
          using Python, Flask and MySQL with separate portals
          for Students, Companies and Admin. Features include
          secure login, resume upload, company job posting,
          application tracking and admin dashboard.
        </p>

        <a
          href="https://github.com/Sneha2423/placement-management-system"
          target="_blank"
          rel="noreferrer"
          style={button}
        >
          View Project
        </a>

      </div>

    </div>
  );
}

export default Projects;

/* STYLES */

const container = {
  padding: "80px 20px",
  textAlign: "center"
};

const heading = {
  fontSize: "36px",
  marginBottom: "40px"
};

const card = {
  maxWidth: "700px",
  margin: "30px auto",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(0,255,255,0.2)",
  borderRadius: "14px",
  padding: "30px"
};

const title = {
  marginBottom: "15px"
};

const description = {
  color: "#9da7b3",
  marginBottom: "25px",
  lineHeight: "1.7"
};

const button = {
  padding: "12px 24px",
  borderRadius: "10px",
  background: "linear-gradient(90deg, #8a2be2, #00f7ff)",
  color: "white",
  textDecoration: "none"
};