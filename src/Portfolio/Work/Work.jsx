import React from "react";
import "./Work.css";
import img66 from "../../assets/img66.png";
const Work = () => {
  return (
    <div className="Work" style={{ backgroundImage: `url(${img66})` }}>
      <div className="work1">
        <h1>OUR WORK</h1>
        <p>
          Our portfolio represents 20 years of construction experience <br />{" "}
          backed by a passion for perfect client service, quality and <br />{" "}
          innovations in consctuction industry.
        </p>
      </div>
    </div>
  );
};

export default Work;
