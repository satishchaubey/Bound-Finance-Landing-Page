import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import CryptoImg from "../../img/crypto side.png";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      <div className="row">
        {/* left side */}
        <div className="col-md-6">
          <img src={CryptoImg} alt="" className="crypto-image" />
        </div>
        {/* right side */}
        <div className="col-md-6 ">
          <div className="crypto-descriptions">
            <div className="description-crypto">Crypto side & Cashback</div>
            <div className="description-crypto">side work in Union</div>
            <div className="mt-5">
              <div className="description-all">
                Crypto users can utilise $eUSD and other LSDFi stablecoins as
                collateral to mint $BCK. We allocate 20% of the yields from the
                $eUSD collateral in three ways:
              </div>
              <div className="description-all mt-4">‍1. BCK Savings Account</div>
              <div className="description-all ">‍2. Cashback App</div>
              <div className="description-all mb-4">‍ 3 . Protocol revenue.</div>
              <div className="description-all mb-4">
                ‍Users can deposit their $BCK into the BCK Savings Account to
                earn yields from the collateral and additional yields from
                protocol treasury-funded validators. To offset the APY loss from
                yield distribution, users can stake 2.5% of their minted BCK in
                BCKGov to earn BCKGov emissions and mitigate APY reduction.
              </div>
              <div className="description-all ">
                ‍When Cashback app users receive cashback in USDC or peUSD, they
                have the option to convert it to $BCK on a 1:1 basis and stake
                it in the BCK Savings Account for extra yields. The resultant
                rise in $BCK demand increases its price, this incentivises more
                $BCK mints, to help to restore the price to a 1:1 equilibrium
                with $eUSD meaning more TVL on the crypto side.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
