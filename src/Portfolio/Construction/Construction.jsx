import React from "react";
import "./Construction.css"
import img67 from "../../assets/img67.png"
import img40 from "../../assets/img40.png";
import img41 from "../../assets/img41.png";
import img68 from "../../assets/img68.png";
import img43 from "../../assets/img43.png";
const Construction = () => {
  return (
    <div className="learn11">
      <div className="card22">
          <div className="learn-card1">
          <img src={img67} alt="" />
        </div>
        
        <div className="learn-card11">
          <img src={img40} alt="" />
          <h3>Construction</h3>
        </div>

        <div className="learn-card11">
          <img src={img41} alt="" />
          <h3>Project Development</h3>
        </div>

        <div className="learn-card11">
          <img src={img43} alt="" />
          <h3>Interior Design</h3>

        </div>

        <div className="learn-card11">
          <img src={img68} alt="" />
          <h3>Interior Design</h3>
        </div>
      </div>
   
    </div>
  );
};

export default Construction;
