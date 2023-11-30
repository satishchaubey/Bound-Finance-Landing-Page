import React from "react";
import "./Testimonial.css";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Testimonial = () => {
  const [isPlusIconOne, setIsPlusIconOne] = useState(false);
  const toggleIconOne = () => {
    setIsPlusIconOne((prevState) => !prevState);
  };
  const [isPlusIconTwo, setIsPlusIconTwo] = useState(false);
  const toggleIconTwo = () => {
    setIsPlusIconTwo((prevState) => !prevState);
  };
  const [isPlusIconThree, setIsPlusIconThree] = useState(false);
  const toggleIconThree = () => {
    setIsPlusIconThree((prevState) => !prevState);
  };
  const [isPlusIconFour, setIsPlusIconFour] = useState(false);
  const toggleIconFour = () => {
    setIsPlusIconFour((prevState) => !prevState);
  };
  const [isPlusIconFive, setIsPlusIconFive] = useState(false);
  const toggleIconFive = () => {
    setIsPlusIconFive((prevState) => !prevState);
  };
  const [isPlusIconSix, setIsPlusIconSix] = useState(false);
  const toggleIconSix = () => {
    setIsPlusIconSix((prevState) => !prevState);
  };
  const [isPlusIconSeven, setIsPlusIconSeven] = useState(false);
  const toggleIconSeven = () => {
    setIsPlusIconSeven((prevState) => !prevState);
  };

  return (
    <div className="t-wrapper" id="docs">
      <div className="question-heading">Frequently Asked Questions</div>
      <div className="row">
        <div className="col-md-6">
          <div className="summary-box" onClick={toggleIconOne}>
            <div
              className={
                isPlusIconOne ? "content-summary-toggle" : "content-summary"
              }
            >
              If I hold stablecoins like USDT, USDC, can I earn interest ?
            </div>
            <div>
              {isPlusIconOne ? (
                <RxCross2 style={{ color: "#35BEFF" }} />
              ) : (
                <FaPlus />
              )}
            </div>
          </div>
          {isPlusIconOne && (
            <div className="description-drop">
              Bound Finance's Cashback app operates on a "daily allowance"
              model, initially set at $30, which rolls over any unused
              allowances. Users receive cashback rewards in fiat U.S. dollars,
              ranging between 10-15% per transaction, which can be withdrawn to
              a user's wallet after a 14-day buffer period to account for
              potential returns or refunds. The app is compatible with all
              credit and debit cards and works in conjunction with existing
              credit card rewards programs. It integrates with the Plaid API for
              transaction tracking and dynamically adjusts cashback allowances
              and rates based on LSDFi stablecoin / yield bearing assets
              rewards/yield. Users can accumulate daily allowances for more
              significant purchases. This not only enables users to buy
              higher-priced items or services with cashback where they
              originally couldn't with other alternatives, but it also allows
              the protocol to earn enough yield to pay for these transactions'
              cashback, ensuring equitable cashback benefits regardless of
              fluctuations in LSDFi stablecoin yields.
            </div>
          )}
          <div className="summary-box mt-3" onClick={toggleIconTwo}>
            <div
              className={
                isPlusIconTwo ? "content-summary-toggle" : "content-summary"
              }
            >
              What is the source of $eUSD interest for BCK Savings Account?
            </div>
            <div>
              {isPlusIconTwo ? (
                <RxCross2 style={{ color: "#35BEFF" }} />
              ) : (
                <FaPlus />
              )}
            </div>
          </div>
          {isPlusIconTwo && (
            <div className="description-drop">
              Bound Finance's Cashback app operates on a "daily allowance"
              model, initially set at $30, which rolls over any unused
              allowances. Users receive cashback rewards in fiat U.S. dollars,
              ranging between 10-15% per transaction, which can be withdrawn to
              a user's wallet after a 14-day buffer period to account for
              potential returns or refunds. The app is compatible with all
              credit and debit cards and works in conjunction with existing
              credit card rewards programs. It integrates with the Plaid API for
              transaction tracking and dynamically adjusts cashback allowances
              and rates based on LSDFi stablecoin / yield bearing assets
              rewards/yield. Users can accumulate daily allowances for more
              significant purchases. This not only enables users to buy
              higher-priced items or services with cashback where they
              originally couldn't with other alternatives, but it also allows
              the protocol to earn enough yield to pay for these transactions'
              cashback, ensuring equitable cashback benefits regardless of
              fluctuations in LSDFi stablecoin yields.
            </div>
          )}
          <div className="summary-box mt-3" onClick={toggleIconThree}>
            <div
              className={
                isPlusIconThree ? "content-summary-toggle" : "content-summary"
              }
            >
              How does Bound finance aim for mainstream adoption?
            </div>
            <div>
              {isPlusIconThree ? (
                <RxCross2 style={{ color: "#35BEFF" }} />
              ) : (
                <FaPlus />
              )}
            </div>
          </div>
          {isPlusIconThree && (
            <div className="description-drop">
              Bound Finance's Cashback app operates on a "daily allowance"
              model, initially set at $30, which rolls over any unused
              allowances. Users receive cashback rewards in fiat U.S. dollars,
              ranging between 10-15% per transaction, which can be withdrawn to
              a user's wallet after a 14-day buffer period to account for
              potential returns or refunds. The app is compatible with all
              credit and debit cards and works in conjunction with existing
              credit card rewards programs. It integrates with the Plaid API for
              transaction tracking and dynamically adjusts cashback allowances
              and rates based on LSDFi stablecoin / yield bearing assets
              rewards/yield. Users can accumulate daily allowances for more
              significant purchases. This not only enables users to buy
              higher-priced items or services with cashback where they
              originally couldn't with other alternatives, but it also allows
              the protocol to earn enough yield to pay for these transactions'
              cashback, ensuring equitable cashback benefits regardless of
              fluctuations in LSDFi stablecoin yields.
            </div>
          )}
          <div className="summary-box mt-3" onClick={toggleIconFour}>
            <div
              className={
                isPlusIconFour ? "content-summary-toggle" : "content-summary"
              }
            >
              How can I mint BCK with Bound Finance?
            </div>
            <div>
              {isPlusIconFour ? (
                <RxCross2 style={{ color: "#35BEFF" }} />
              ) : (
                <FaPlus />
              )}
            </div>
          </div>
          {isPlusIconFour && (
            <div className="description-drop">
              Minting or borrowing BCK involves depositing a $eUSD. This
              deposited amount then serves as collateral, allowing you to mint
              BCK at the protocol set collateral ratio, default its 1:1.
            </div>
          )}
        </div>
        <div className="col-md-6">
          <div className="summary-box" onClick={toggleIconFive}>
            <div
              className={
                isPlusIconFive ? "content-summary-toggle" : "content-summary"
              }
            >
              How does the cashback app work?
            </div>
            <div>
              {isPlusIconFive ? (
                <RxCross2 style={{ color: "#35BEFF" }} />
              ) : (
                <FaPlus />
              )}
            </div>
          </div>
          {isPlusIconFive && (
            <div className="description-drop">
              Bound Finance's Cashback app operates on a "daily allowance"
              model, initially set at $30, which rolls over any unused
              allowances. Users receive cashback rewards in fiat U.S. dollars,
              ranging between 10-15% per transaction, which can be withdrawn to
              a user's wallet after a 14-day buffer period to account for
              potential returns or refunds. The app is compatible with all
              credit and debit cards and works in conjunction with existing
              credit card rewards programs. It integrates with the Plaid API for
              transaction tracking and dynamically adjusts cashback allowances
              and rates based on LSDFi stablecoin / yield bearing assets
              rewards/yield. Users can accumulate daily allowances for more
              significant purchases. This not only enables users to buy
              higher-priced items or services with cashback where they
              originally couldn't with other alternatives, but it also allows
              the protocol to earn enough yield to pay for these transactions'
              cashback, ensuring equitable cashback benefits regardless of
              fluctuations in LSDFi stablecoin yields.
            </div>
          )}
          <div className="summary-box mt-3" onClick={toggleIconSix}>
            <div
              className={
                isPlusIconSix ? "content-summary-toggle" : "content-summary"
              }
            >
              Does Bound Finance charge any fees?
            </div>
            <div>
              {isPlusIconSix ? (
                <RxCross2 style={{ color: "#35BEFF" }} />
              ) : (
                <FaPlus />
              )}
            </div>
          </div>
          {isPlusIconSix && (
            <div className="description-drop">
              Bound Finance's Cashback app operates on a "daily allowance"
              model, initially set at $30, which rolls over any unused
              allowances. Users receive cashback rewards in fiat U.S. dollars,
              ranging between 10-15% per transaction, which can be withdrawn to
              a user's wallet after a 14-day buffer period to account for
              potential returns or refunds. The app is compatible with all
              credit and debit cards and works in conjunction with existing
              credit card rewards programs. It integrates with the Plaid API for
              transaction tracking and dynamically adjusts cashback allowances
              and rates based on LSDFi stablecoin / yield bearing assets
              rewards/yield. Users can accumulate daily allowances for more
              significant purchases. This not only enables users to buy
              higher-priced items or services with cashback where they
              originally couldn't with other alternatives, but it also allows
              the protocol to earn enough yield to pay for these transactions'
              cashback, ensuring equitable cashback benefits regardless of
              fluctuations in LSDFi stablecoin yields.
            </div>
          )}
          <div className="summary-box mt-3" onClick={toggleIconSeven}>
            <div
              className={
                isPlusIconSeven ? "content-summary-toggle" : "content-summary"
              }
            >
              How is the cashback calculated?
            </div>
            <div>
              {isPlusIconSeven ? (
                <RxCross2 style={{ color: "#35BEFF" }} />
              ) : (
                <FaPlus />
              )}
            </div>
          </div>
          {isPlusIconSeven && (
            <div className="description-drop">
              Bound Finance's Cashback app operates on a "daily allowance"
              model, initially set at $30, which rolls over any unused
              allowances. Users receive cashback rewards in fiat U.S. dollars,
              ranging between 10-15% per transaction, which can be withdrawn to
              a user's wallet after a 14-day buffer period to account for
              potential returns or refunds. The app is compatible with all
              credit and debit cards and works in conjunction with existing
              credit card rewards programs. It integrates with the Plaid API for
              transaction tracking and dynamically adjusts cashback allowances
              and rates based on LSDFi stablecoin / yield bearing assets
              rewards/yield. Users can accumulate daily allowances for more
              significant purchases. This not only enables users to buy
              higher-priced items or services with cashback where they
              originally couldn't with other alternatives, but it also allows
              the protocol to earn enough yield to pay for these transactions'
              cashback, ensuring equitable cashback benefits regardless of
              fluctuations in LSDFi stablecoin yields.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
