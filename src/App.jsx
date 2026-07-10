import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div style={appStyle}>
  
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
       <Certifications />
      <Contact />
     
    </div>
  );
}

export default App;
const appStyle = {
  minHeight: "100vh",
  color: "white",
  fontFamily: "system-ui, sans-serif",
  background: `
    radial-gradient(circle at top left, rgba(138,43,226,0.15), transparent 30%),
    radial-gradient(circle at top right, rgba(0,247,255,0.12), transparent 30%),
    #050816
  `
};