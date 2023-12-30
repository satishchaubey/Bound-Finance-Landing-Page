import React, { useContext, useState } from "react";
import "./BackNavbar.css";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import Logo from "../../img/LOGO.png";
import Social from "../../img/Social.png";
import SocialTwo from "../../img/Social (1).png";

const BackNavbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div id="contact" className="bg-footer">
        <div className="contact">
          <div>
            <img src={Logo} alt="" className="img-footer-logo" />
          </div>
          <div className="n-list">
            <ul style={{ listStyleType: "none" }} className="mt-3">
              <li>
                <Link
                  activeClass="active"
                  to="Navbar"
                  spy={true}
                  smooth={true}
                  className="link-font"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="works" spy={true} smooth={true} className="link-font">
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="crypto-sections"
                  spy={true}
                  smooth={true}
                  className="link-font"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  className="link-font"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link to="" spy={true} smooth={true} className="link-font">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="docs" spy={true} smooth={true} className="link-font">
                  Docs
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="connect-with">Connect with us</div>
            <img src={SocialTwo} alt="" className="socialTwo-footer" />
            <img src={Social} alt="" className="socialTwo-footer-two" />
          </div>
        </div>
        <div className="straight-line-footer"></div>
        <div className="copy-right">
          © Copyright 2023, All Rights Reserved by Bound Finance
        </div>
      </div>
    </>
  );
};

export default BackNavbar;
