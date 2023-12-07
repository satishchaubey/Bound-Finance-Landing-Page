import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Logo from "../../img/LOGO.png";
import Social from "../../img/Social.png";
import SocialTwo from "../../img/Social (1).png";
import { motion } from "framer-motion";

const navbar = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Adjust the stagger delay as needed
        delayChildren: 1,
      },
    },
  };
  

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      className="n-wrapper"
      id="Navbar"
      initial="hidden"
      animate="show"
    >
      {/* left */}
      <div className="n-left">
      <div className="n-name">
          <motion.img
            src={Logo}
            alt=""
            className="logo-css"
            variants={item}
            size={50}
          />
        </div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <motion.ul
            style={{ listStyleType: "none" }}
            className="mt-3"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.li variants={item} size={50}>
              <Link
                activeClass="active"
                to="Navbar"
                spy={true}
                smooth={true}
                className="link-font"
              >
                Home
              </Link>
            </motion.li>
            <motion.li variants={item} size={50}>
              <Link to="works" spy={true} smooth={true} className="link-font">
                About us
              </Link>
            </motion.li>
            <motion.li variants={item} size={50}>
              <Link
                to="crypto-sections"
                spy={true}
                smooth={true}
                className="link-font"
              >
                How it works
              </Link>
            </motion.li>
            <motion.li variants={item} size={50}>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                className="link-font"
              >
                Team
              </Link>
            </motion.li>
            <motion.li variants={item} size={50}>
              <Link to="docs" spy={true} smooth={true} className="link-font">
                FAQ
              </Link>
            </motion.li>
            <motion.li variants={item} size={50}>
              <Link to="docs" spy={true} smooth={true} className="link-font">
                Docs
              </Link>
            </motion.li>
          </motion.ul>
        </div>
        {/* <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link> */}
          <motion.div
          className="social"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.img
            src={SocialTwo}
            alt=""
            className="socialTwo"
            variants={item}
            size={50}
          />
          <motion.img
            src={Social}
            alt=""
            className="socialOne"
            variants={item}
            size={50}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default navbar;
