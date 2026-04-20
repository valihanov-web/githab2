import React from "react";
import "./Suppordet.css";
import img49 from "../../../assets/img49.png";
import img50 from "../../../assets/img50.png";
import img51 from "../../../assets/img51.png";
import img52 from "../../../assets/img52.png";
import img53 from "../../../assets/img52.png";
import img54 from "../../../assets/img54.png";
import img55 from "../../../assets/img55.png";
import img56 from "../../../assets/img56.jpg";
const Suppordet = () => {
  return (
    <div className="suppordet">
      <div className="suppordet2">
        <div className="suppordet3">
          <h1>Supported by 12+ partners</h1>
        </div>
        <div className="suppordet4">
          <img src={img49} alt="" />
          <img src={img50} alt="" />
          <img src={img51} alt="" />
          <img src={img52} alt="" />
          <img src={img53} alt="" />
          <img src={img54} alt="" />
        </div>
      </div>
      <div className="suppordet-card">
        <div className="suppordet-card3">
          <h1>What our clients are saying</h1>
          <img src={img55} alt="" />
          <div className="suppordet-card4">
            <p>
              Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum
              eiusmod enim. <br /> Consectetur magna cillum consequat minim
              laboris cillum laboris voluptate minim <br />
              proident exercitation ullamco.
            </p>
          </div>
          <div className="suppordet-card5">
            <div className="suppordet-card6">
                 <h4>Shawn Edwards</h4>
            <p>Position, Company name</p>
            </div>
            <div className="suppordet-card6">
              <h5>←  →</h5>
            </div>
          </div>
        </div>
        <div className="suppordet-img">
          <img src={img56} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Suppordet;
