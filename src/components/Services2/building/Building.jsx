import React from 'react'
import "./Building.css";
import img46 from "../../../assets/img6.png";
import img47 from "../../../assets/img7.jpg";
import img48 from "../../../assets/img8.jpg";
import img49 from "../../../assets/img9.png";
import img50 from "../../../assets/img10.png";
import img51 from "../../../assets/img11.png";
import img52 from "../../../assets/img12.png";
import img53 from "../../../assets/img13.png";
import img54 from "../../../assets/img14.png";

const Building = () => {
  return (
     <div className="projects">
      <div className="projects-top">
        <h1>
         Related projects
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
         <div className="consalting">
        <img src={img49} alt="" />
        <img src={img50} alt="" />
        <img src={img51} alt="" />
        <img src={img52} alt="" />
        <img src={img53} alt="" />
        <img src={img54} alt="" />


      </div>
    </div>
  )
}

export default Building
