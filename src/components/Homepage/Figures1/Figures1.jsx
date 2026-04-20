import React from 'react'
import './Figures1.css'
import img57 from '../../../assets/img57.png'
import img58 from '../../../assets/img58.png'
import img59 from '../../../assets/img59.png'
import img60 from '../../../assets/img60.png'
const Figures1 = () => {
  return (
    <div className='figures1'>
        <div className="figures2">
            <h1>Some facts and figures</h1>
        </div>
        <div className="figures33">
        <div className="figures3">
            <img src={img57} alt="" />
            <p>Totally satisfied clients</p>
        </div>
          <div className="figures3">
            <img src={img58} alt="" />
            <p>Years of experience</p>
        </div>
          <div className="figures3">
            <img src={img59} alt="" />
            <p>Working hours spent</p>
        </div>
          <div className="figures3">
            <img src={img60} alt="" />
            <p>Succeeded projects</p>
        </div>
      </div>
         
    </div>
  )
}

export default Figures1
