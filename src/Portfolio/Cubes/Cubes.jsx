import React from "react";
import "./Cubes.css";
import img69 from "../../assets/img69.png";
import img70 from "../../assets/img70.png";
import img71 from "../../assets/img71.png";
import img72 from "../../assets/img72.png";
import img73 from "../../assets/img73.png";
import img74 from "../../assets/img74.png";
import img75 from "../../assets/img75.png";
import img76 from "../../assets/img76.png";
import img77 from "../../assets/img77.png";
const Cubes = () => {
  return (
    <div className="cubes">
      <div className="cubes0">
        <div className="cubes1">
          <img src={img69} alt="" />
          <h3>Cubes Building</h3>
          <p>Business Centers</p>
        </div>
        <div className="cubes1">
          <img src={img70} alt="" />
          <h3>Modern Cottage</h3>
          <p>Business Centers</p>
        </div>
        <div className="cubes1">
          <img src={img71} alt="" />
          <h3>Luxury Beach House</h3>
          <p>Business Centers</p>
        </div>
      </div>

      <div className="cubes00">
        <div className="cubes1">
          <img src={img72} alt="" />
          <h3>Modern Double Bedroom</h3>
          <p>Business Centers</p>
        </div>
        <div className="cubes1">
          <img src={img73} alt="" />
          <h3>Modern Double Bedroom</h3>
          <p>Business Centers</p>
        </div>
        <div className="cubes1">
          <img src={img74} alt="" />
          <h3>The Pencil Building</h3>
          <button>View Project</button>
        </div>
      </div>

       <div className="cubes00">
        <div className="cubes1">
          <img src={img75} alt="" />
          <h3>Red Finger Building</h3>
          <p>Business Centers</p>
        </div>
        <div className="cubes1">
          <img src={img76} alt="" />
          <h3>Modern Double Bedroom</h3>
          <p>Business Centers</p>
        </div>
        <div className="cubes1">
          <img src={img77} alt="" />
          <h3>The Pencil Building</h3>
          <p>Business Centers</p>
        </div>
      </div>
    </div>
  );
};

export default Cubes;
