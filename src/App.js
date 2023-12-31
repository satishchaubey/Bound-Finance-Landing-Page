import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Crypto-Section";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import BackNavbar from "./components/Contact/BackNavbar";
import Footer from "./components/Footer/Second-Section";
import { useContext } from "react";
import { themeContext } from "./Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondSection from "./components/Footer/Second-Section";
import { motion, useScroll } from "framer-motion";


function App() {
  const { scrollYProgress } = useScroll();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#0F0F0F" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      
    
      <Experience />
      <SecondSection />
      
      <Works />
      <Portfolio />
      <Testimonial />
      <BackNavbar />
    </div>
  );
}

export default App;
