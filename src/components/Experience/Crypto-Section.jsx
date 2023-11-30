import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Crypto-Section.css";
import { motion, useScroll, useSpring } from "framer-motion";

const CryptoSection = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="crypto-sections">
      <div className="progress-bar" style={{ scaleX }} />

      {/* Other animated elements */}
      <motion.div className="straight-work" animate={{ opacity: scaleX }} />
      <div
        className="how-works"
        animate={{ opacity: scaleX }}
      >
        How Bound finance Works <span className="question-mark">?</span>
      </div>
      <div className="crypto" animate={{ opacity: scaleX }}>
        Crypto Section
      </div>
      
    </div>
  );
};

export default CryptoSection;
