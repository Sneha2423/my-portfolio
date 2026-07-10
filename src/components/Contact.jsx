function Contact() {
  return (
    <div id="contact" style={container}>

      <h2 style={heading}>Contact</h2>

      <p style={text}>
        Email:
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=snehabawachkar@gmail.com"
  target="_blank"
  rel="noreferrer"
  style={link}
>
  snehabawachkar@gmail.com
</a>
      </p>

      <p style={text}>
        Phone: +91 8446346920
      </p>

    </div>
  );
}

export default Contact;

/* STYLES */

const container = {
  padding: "80px 20px",
  textAlign: "center"
};

const heading = {
  fontSize: "36px",
  marginBottom: "30px"
};

const text = {
  color: "#9da7b3",
  marginTop: "10px",
  fontSize: "18px"
};

const link = {
  color: "#00f7ff",
  textDecoration: "none",
  marginLeft: "6px"
};