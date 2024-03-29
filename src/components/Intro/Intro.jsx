import React, { useContext } from "react";
import "./Intro.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Bound from "../../img/BOUND FINANCE.png";
import CardSmall from "./CardSmall";
import Mobile from "../../img/mobile.png";
import CardMobile from "../../img/american express card.png";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="col-md-12" id="home">
        <div className="home-section">
          <div className="bound-image">
            <motion.div
              // src={Bound}
              // alt=""
              className="bound-image-position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 5 }}
            >BOUND FINANCE</motion.div>
          </div>
          <div className="bound-image">
            <div className="content-card">
              Revolutionise Your Card
              <div className="straight-line"></div>
              <div className="small-content">
                ALL TRANSACTIONS AMPLIFIED WITH
                <span className="cashback-font">
                  <span className="percentage">12 %</span> CASHBACK
                </span>
              </div>
              <div className="other-content">
                <div className="introduction-first">
                  Introducing the world's first LSDfi protocol with an exclusive
                </div>
                <div className="introduction-first-line">
                  10-15% cashback on all credit/debit card transactions.
                </div>
              </div>
              <div className="btn-coming">
                <motion.button
                  className="coming"
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  // whileFocus={{ scale: 1.2 }}
                  drag="x"
                  dragConstraints={{ left: 10, right: 30 }}
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                >
                  Coming Soon
                </motion.button>
              </div>
            </div>
            <div></div>
          </div>
          <div className="d-none d-md-block">
            <CardSmall />
          </div>
          <div className="position-relative">
            <div className="">
              <img src={Mobile} alt="" className="mobile" />
            </div>
            <div className="">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: [1.5, 1] }}
                transition={{
                  duration: 8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                src={CardMobile}
                alt=""
                className="mobile-card"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
