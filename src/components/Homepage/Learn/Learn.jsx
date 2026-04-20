import React from "react";
import "./Learn.css";
import img40 from "../../../assets/img40.png";
import img41 from "../../../assets/img41.png";
import img42 from "../../../assets/img42.png";
import img43 from "../../../assets/img43.png";

const Learn = () => {
  return (
    <div className="learn">
      <div className="learn1">
        <h1>Our services</h1>
        <p>
          Createx Construction Bureau is a construction giant with a full range
          of construction services.
        </p>
      </div>
      <div className="card2">
        <div className="learn-card">
          <img src={img40} alt="" />
          <h3>Construction</h3>
        </div>

        <div className="learn-card">
          <img src={img41} alt="" />
          <h3>Project Development</h3>
        </div>

        <div className="learn-card">
          <img src={img42} alt="" />
        </div>

        <div className="learn-card">
          <img src={img43} alt="" />
          <h3>Repairs</h3>
        </div>
      </div>
      <div className="btn2">
        <h1>Learn more about our services</h1>
        <button>View services</button>
      </div>
    </div>
  );
};

export default Learn;
