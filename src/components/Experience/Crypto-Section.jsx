import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Crypto-Section.css";
import FirstImg from "../../img/1st.png";
import SecondImg from "../../img/2nd illustration.png";
import ThirdImg from "../../img/3rd.png";
import One from "../../img/1.png";
import Two from "../../img/2.png";
import Three from "../../img/3.png";

const CryptoSection = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="crypto-sections">
      <div className="straight-work"></div>
      <div className="how-works" >
        How Bound finance Works <span className="question-mark">?</span>
      </div>
      <div className="crypto" >
        Crypto Section
      </div>
      <div className="">
         
      </div>
      <div className="row">
        <div className="col-md-6">
          <div>
            <img src={FirstImg} alt="" className="firstImg" />
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <div className="one-number">
              <img src={One} alt=""  className="oneImg"/>
            </div>
          </div>
          <div className="outer">
            <div className="inner">
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
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="all">
            <div className="one">
              <img src={Two} alt="" className="twoImg"/>
            </div>

            <div className="outer">
              <div className="inner-one">
                <div className="mint-section">Earn Double Yield</div>
                <div className="straight-line"></div>
                <div className="content-section">
                  Earn ~ 6-5% APY on your collateral $eUSD.Earn ~ 5% APY by
                  depositing $BCK into BCK savings account, (~8% altogether)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <img src={SecondImg} alt="" className="secondImg" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div>
            <img src={ThirdImg} alt="" className="third-Img" />
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <div className="one">
              <img src={Three} alt="" className="thirdImg"/>
            </div>
          </div>
          <div className="outer">
            <div className="inner-two">
              <div className="mint-section">Earn BCKGov emission</div>
              <div className="straight-line"></div>
              <div className="content-section">
                Stake 2.5% of the minted BCK amount you’ve taken out in BCKGov
                to earn BCKGov emission rewards
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoSection;
