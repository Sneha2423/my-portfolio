function Certifications() {

  const certificates = [
    "Web Development Certification",
    "Data Science & Machine Learning Certification",
    "Python Full Stack Development Certification"
  ];

  return (
    <div id="certifications" style={container}>

      <h2 style={heading}>
        Certifications
      </h2>

      <div style={cardContainer}>

        {certificates.map((item, index) => (
          <div key={index} style={card}>
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}

export default Certifications;

/* STYLES */

const container = {
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "100px 20px",
  textAlign: "center"
};

const heading = {
  fontSize: "42px",
  marginBottom: "50px",
  background: "linear-gradient(90deg, #8a2be2, #00f7ff)",
  WebkitBackgroundClip: "text",
  color: "transparent"
};

const cardContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "25px",
  flexWrap: "wrap"
};

const card = {
  padding: "25px 30px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(0,255,255,0.15)",
  color: "#ffffff",
  minWidth: "280px",
  transition: "0.3s",
  boxShadow: "0 0 15px rgba(0,255,255,0.08)"
};