import React from "react";
import "./Pradners.css";
import img55 from "../../assets/img55.png";
import img56 from "../../assets/img56.jpg";
const Pardners = () => {
  return (
    <div className="suppordet1">
      <div className="suppordet-card1">
        <div className="suppordet-card31">
          <h1>What our clients are saying</h1>
          <img src={img55} alt="" />
          <div className="suppordet-card41">
            <p>
              Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum
              eiusmod enim. <br /> Consectetur magna cillum consequat minim
              laboris cillum laboris voluptate minim <br />
              proident exercitation ullamco.
            </p>
          </div>
          <div className="suppordet-card51">
            <div className="suppordet-card61">
                 <h4>Shawn Edwards</h4>
            <p>Position, Company name</p>
            </div>
            <div className="suppordet-card61">
              <h5>←  →</h5>
            </div>
          </div>
        </div>
        <div className="suppordet-img1">
          <img src={img56} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Pardners;

