import React, { useContext } from "react";
import "./Services.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

import rightPic from "../../img/SVG Market.png";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <>
      <div className="services" id="works">
        <div className="row ">
          <div className="col-md-6 mission-margin">
            <div className="straight"></div>
            <div className="content-mission">Our Mission</div>
            <div className="all-content-mission for-font">
              Bound Finance transforms your standard Visa, Mastercard, or Amex
              into high-yield cashback cards, offering a standout 12% return on
              purchases. Achieved via the Plaid API, our unique LSDFi Cashback
              feature unites Ethereum-backed loan providers in crypto with
              cashback users. We leverage ETH collateral from loans to gain
              validator rewards, funding exceptional cashback rates without
              necessitating hefty crypto stakes or plan subscriptions.
              <div className="mt-4 for-font">
                We democratize crypto benefits, remove all barriers to entry,
                and offer a welcoming entry into cryptocurrency for the
                volatility-wary, and ensuring unmatched cashback returns.
              </div>
              <div className="mt-4 for-font">
                Ultimately, Bound Finance is more than a spending platform;
                we're a financial revolution, fostering crypto accessibility,
                reward, and mainstream adoption.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={rightPic} alt="" className="mission-image" />
            <div className="position-relative">
              <div className="inner-card-intro">
                <div className="header-card">CASH BACK RECIEVED</div>
                <div className="date-card">JUNE 15,2020</div>
                <div className="straight-line-card"></div>
                <div className="card-items">
                  <div>Webflow</div>
                  <div>-$45</div>
                  
                </div>
                <div className="card-items">
                  <div className="small-content-card">Outcoming Transfer</div>
                  <div className="small-content-card-color">+$5.40</div>
                </div>
                <div className="card-items mt-3">
                  <div>Sketch</div>
                  <div>-$79</div>
                </div>
                <div className="card-items">
                  <div className="small-content-card">Annual withdrawal of funds</div>
                  <div className="small-content-card-color">+$9.48</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
