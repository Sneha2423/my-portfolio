function Background() {
  return (
    <div style={background}>

      <div style={circle1}></div>

      <div style={circle2}></div>

      <div style={circle3}></div>

    </div>
  );
}

export default Background;

/* MAIN */

const background = {
  position: "fixed",
  inset: 0,
  zIndex: -1,
  background: "#050816",
  overflow: "hidden"
};

/* PURPLE */

const circle1 = {
  position: "absolute",
  width: "450px",
  height: "450px",
  borderRadius: "50%",
  background: "#8a2be2",
  filter: "blur(140px)",
  top: "-120px",
  left: "-120px",
  opacity: 0.5
};

/* BLUE */

const circle2 = {
  position: "absolute",
  width: "400px",
  height: "400px",
  borderRadius: "50%",
  background: "#00f7ff",
  filter: "blur(140px)",
  top: "120px",
  right: "-120px",
  opacity: 0.45
};

/* PINK */

const circle3 = {
  position: "absolute",
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  background: "#ff00ff",
  filter: "blur(140px)",
  bottom: "-120px",
  left: "35%",
  opacity: 0.3
};