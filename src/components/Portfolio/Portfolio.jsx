import React, { useContext } from "react";
import "./Portfolio.css";

import { themeContext } from "../../Context";
import img1 from "../../img/arsal (3).png";
import img2 from "../../img/arsal (1).png";
import img3 from "../../img/arsal (2).png";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <div className="cover-heading">
        <div className="straight-heading"></div>
        <span style={{ color: darkMode ? "white" : "" }} className="heading">
          Meet the team
        </span>
      </div>

      {/* slider */}
      <div className="d-flex justify-content-around flex-wrap">
        <div className="card-image mt-5">
          <div className="card-content">
            <img src={img1} alt="" />
            <div className="content-all">
              <div className="all-head">Shuayb Ahmed</div>
              <div>Technical Lead</div>
              <div className="straight-line-content"></div>
              <div className="content-footer">
                BSc Mathematics, Finance & Economics
              </div>
            </div>
          </div>
        </div>
        <div className="card-image mt-5">
          <div className="card-content">
            <img src={img2} alt="" />
            <div className="content-all">
              <div className="all-head">Arsalan Toor</div>
              <div>Technical Lead</div>
              <div className="straight-line-content"></div>
              <div className="content-footer">
                BSc Mathematics, Finance & Economics
              </div>
            </div>
          </div>
        </div>
        <div className="card-image mt-5">
          <div className="card-content">
            <img src={img3} alt="" />
            <div className="content-all">
              <div className="all-head">Oskar Wilkie</div>
              <div>Technical Lead</div>
              <div className="straight-line-content"></div>
              <div className="content-footer">
                BSc Mathematics, Finance & Economics
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
