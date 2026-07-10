function Navbar() {
  return (
    <nav style={navbar}>

      {/* LOGO / NAME */}
      <h2 style={logo}>
        Sneha Bawachkar
      </h2>

      {/* MENU */}
      <div style={navLinks}>

        <a href="#home" style={link}>
          Home
        </a>

        <a href="#skills" style={link}>
          Skills
        </a>

        <a href="#projects" style={link}>
          Projects
        </a>

        <a href="#contact" style={link}>
          Contact
        </a>

      </div>

    </nav>
  );
}

export default Navbar;

/* STYLES */

const navbar = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  backdropFilter: "blur(10px)",
  background: "rgba(13,17,23,0.7)",
  borderBottom: "1px solid rgba(255,255,255,0.05)"
};

const logo = {
  color: "#00f7ff",
  fontSize: "28px"
};

const navLinks = {
  display: "flex",
  gap: "25px"
};

const link = {
  color: "white",
  textDecoration: "none",
  transition: "0.3s"
};