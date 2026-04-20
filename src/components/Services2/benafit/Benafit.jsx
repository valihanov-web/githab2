import React from 'react'
import './Benafit.css'
import img1 from '../../../assets/img3.png'
import img2 from '../../../assets/img4.png'
import img3 from '../../../assets/img5.png'


const Benafit = () => {
  return (
    <div className='benafit-section' >
      <div className="benafit">
        <h1>Our benefits</h1>
        <p>Our mission is to set the highest standards for construction sphere.</p>
      </div>
      <div className="benafit-container">
        <div className="fixed">
          <img src={img1} alt="" />
          <h1>Fixed Terms & Cost</h1>
          <p>Culpa nostrud commodo ea consequat <br /> aliquip reprehenderit. Veniam velit <br /> nostrud aliquip sunt.</p>
        </div>
        <div className="fixed">
          <img src={img2} alt="" />
          <h1>Qualified Workers</h1>
          <p>Anim reprehenderit sint voluptate <br /> exercitation adipisicing laborum <br /> adipisicing. Minim empor est ea.</p>
        </div>
        <div className="fixed">
          <img src={img3} alt="" />
          <h1>Supervision & Control</h1>
          <p>Sit veniam aute dolore adipisicing nulla <br /> sit culpa. Minim mollit voluptate <br /> ullamco proident ea ad.</p>
        </div>

      </div>
      <div className="btn">
        <button>Discuss a project</button>
      </div>
    </div>
  )
}

export default Benafit
