import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "../Experience/Crypto-Section.css";

import FirstImg from "../../img/Group 10185.png";
import SecondImg from "../../img/Group 10208 (4).png";
import ThirdImg from "../../img/Group 10208 (1).png";
import One from "../../img/1.png";
import Two from "../../img/2.png";
import Three from "../../img/3.png";

const SecondSection = () => {
 

 

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="crypto-sections">
      <div className="crypto margin-for-crypto">
        Cash back Section
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="one-section" style={{ marginLeft: "5rem" }}>
            <img src={One} alt="" className="img-One"/>
          </div>
          <div className="outer">
            <div className="inner-section">
              <div className="mint-section">Mint & borrow $BCK</div>
              <div className="straight-line"></div>
              <div className="content-section">
                Deposit $eUSD and other yield bearing stablecoins as collateral
                to mint & borrow $BCK. The $BCK loan is interest free! You can
                either earn APY on BCK or use BCK in any DeFi Protocols.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="position-relative">
            <img src={FirstImg} alt="" className="first-Img" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        <div className="position-relative">
            <img src={SecondImg} alt="" className="second-Img" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="all">
            <div className="one-section-two">
              <img src={Two} alt="" className="img-second"/>
            </div>

            <div className="outer">
              <div className="inner-second-component">
                <div className="mint-section">Mint & borrow $BCK</div>
                <div className="straight-line"></div>
                <div className="content-section">
                  Deposit $eUSD and other yield bearing stablecoins as
                  collateral to mint & borrow $BCK. The $BCK loan is interest
                  free! You can either earn APY on BCK or use BCK in any DeFi
                  Protocols.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="one-section-three" style={{ marginLeft: "0rem" }}>
            <img src={Three} alt="" className="img-third" />
          </div>
          <div className="outer">
            <div className="inner-section-two">
              <div className="mint-section">Mint & borrow $BCK</div>
              <div className="straight-line"></div>
              <div className="content-section">
                Deposit $eUSD and other yield bearing stablecoins as collateral
                to mint & borrow $BCK. The $BCK loan is interest free! You can
                either earn APY on BCK or use BCK in any DeFi Protocols.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={ThirdImg}
            alt=""
            className="Img-third "
            style={{ marginBottom: "3rem" }}
          />
        </div>
      </div>

    </div>
  );
};

export default SecondSection;
