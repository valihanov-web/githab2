import React from "react";
import "./Browse.css";
import img46 from "../../../assets/img46.png";
import img47 from "../../../assets/img47.png";
import img48 from "../../../assets/img48.png";

const Browse = () => {
  return (
    <div className="projects">
      <div className="projects-top">
        <h1>
          Browse our selected projects <br />
          and learn more about our work
        </h1>

        <div className="arrows">
          <span className="arrow">←</span>
          <span className="arrow active">→</span>
        </div>
      </div>

      <div className="projects-cards">
        <div className="project-card">
          <img src={img46} alt="" />
          <div className="info">
            <h3>Red Finger Building</h3>
            <p>Business Centers</p>
          </div>
        </div>

        <div className="project-card active">
          <img src={img47} alt="" />
          <div className="info">
            <h3>Cubes Building</h3>
            <p>Business Centers</p>
            <button>VIEW PROJECT</button>
          </div>
        </div>

        <div className="project-card">
          <img src={img48} alt="" />
          <div className="info">
            <h3>The Pencil Building</h3>
            <p>Stores & Malls</p>
          </div>
        </div>
      </div>

      <div className="projects-bottom">
        <h2>Explore all our works</h2>
        <button>VIEW PORTFOLIO</button>
      </div>
    </div>
  );
};

export default Browse;
