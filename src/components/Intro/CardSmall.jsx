import React from "react";
import { motion } from "framer-motion";
import "./cardsmall.css";
import Visa from "../../img/visa-logo.png";

const CardSmall = () => {
  const spring = {
    type: "spring",
    damping: 60,
    stiffness: 40,
  };
  return (
    <div className="small-card">
      <div className="small-card-position">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 150 }}
          transition={spring}
          className="floating-div"
        >
          <div className="motion-top">cashback Rate</div>

          <div className="motion-middle">Today</div>
          <div className="motion-bottom">12%</div>
        </motion.div>
      </div>
      <div className="">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 150 }}
          transition={spring}
          className="floating-div-two"
        >
          <div className="">
            <img src={Visa} alt="" className="visa" />
          </div>
          <div className="straight-card"></div>
          <div className="saving">Saving Account</div>
          <div className="numbers">$5,566</div>
          <div className="straight-card"></div>
          <div className="small-number">**4552</div>
        </motion.div>
      </div>
      <div className="position-relative">
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={spring}
          className="floating-div-three"
        >
          <div className="">
            <div className="row">
              <div className="col-md-6">
                <div className="cashback">cashback </div>
                <div className="cashback">allowance</div>
              </div>
              <div className="col-md-6">
                <div className="date-week">Sat </div>
                <div className="date-week">15 Aug</div>
              </div>
            </div>
            <div
              className="straight-card"
              style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }}
            ></div>
          </div>
          <div className="motion-middle">Total</div>
          <div className="numbers">$2500</div>
          <div
            className="straight-card"
            style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }}
          ></div>
          <div className="d-flex justify-content-between">
            <div className="">Daily Allowance</div>
            <div className="">+$30</div>
          </div>
        </motion.div>
      </div>
      <div className="">
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={spring}
          className="floating-div-four"
        >
          <div className="row">
            <div className="col-md-6">
              <div className="cashback">cashback </div>
              <div className="cashback">Earned</div>
            </div>
            <div className="col-md-6">
              <div className="date-week">Sat </div>
              <div className="date-week">15 Aug</div>
            </div>
          </div>
          <div
            className="straight-card"
            style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }}
          ></div>
          <div className="motion-middle">Total</div>
          <div className="numbers">$657</div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardSmall;
