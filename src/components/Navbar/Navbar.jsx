import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Logo from "../../img/LOGO.png";
import Social from "../../img/Social.png";
import SocialTwo from "../../img/Social (1).png";

const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">
          <img src={Logo} alt="" className="logo-css"/>
        </div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }} className="mt-3">
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true} className="link-font">
                Home
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}  className="link-font">
                About us
              </Link>
            </li>
            <li>
              <Link to="crypto-sections" spy={true} smooth={true}  className="link-font">
                How it works
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}  className="link-font">
                Team
              </Link>
            </li>
            <li>
              <Link to="" spy={true} smooth={true}  className="link-font">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="docs" spy={true} smooth={true}  className="link-font">
                Docs
              </Link>
            </li>
          </ul>
        </div>
        {/* <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link> */}
        <div className="social">
          <img src={SocialTwo} alt="" className="socialTwo" />
          <img src={Social} alt="" className="socialOne" />
        </div>
      </div>
    </div>
  );
};

export default navbar;
