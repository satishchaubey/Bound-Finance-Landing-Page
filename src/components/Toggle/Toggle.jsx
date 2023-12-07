import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const toggleContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } }, // Adjust the duration as needed
  };
  const buttonVariants = {
    left: { left: "2px", transition: { duration: 0.5 } },
    right: { right: "2px", transition: { duration: 0.5 } },
  };
  // console.log(darkMode,"darkMode")
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <motion.div
      className="toggle"
      onClick={handleClick}
      initial="hidden"
      animate="show"
      variants={toggleContainer}
    >
      <Moon />
      <Sun />
      <motion.div
        className="t-button"
        variants={buttonVariants}
        animate={darkMode ? "left" : "right"}
      ></motion.div>
    </motion.div>
  );
};

export default Toggle;
