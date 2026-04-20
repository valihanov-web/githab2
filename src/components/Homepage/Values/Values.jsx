import React from 'react'
import './Values.css'
import img37 from '../../../assets/img37.png'
import img38 from '../../../assets/img38.png'
import img39 from '../../../assets/img39.png'
const Values = () => {
  return (
    <div className='values'>
        <div className="values1">
            <h1>Our core values</h1>
            <p>Our mission is to set the highest standards for construction sphere.</p>
        </div>
        <div className="card">
        <div className="values-card">
            <img src={img37} alt="" />
            <h3>Quality</h3>
            <p>Culpa nostrud commodo ea consequat <br /> aliquip reprehenderit. Veniam velit <br /> nostrud aliquip sunt.</p>
        </div>
         <div className="values-card">
            <img src={img38} alt="" />
            <h3>Safety</h3>
            <p>Anim reprehenderit sint voluptate <br /> exercitation adipisicing laborum <br /> adipisicing. Minim empor est ea.</p>
        </div>
         <div className="values-card">
            <img src={img39} alt="" />
            <h3>Comfort</h3>
            <p>Sit veniam aute dolore adipisicing nulla <br /> sit culpa. Minim mollit voluptate <br /> ullamco proident ea ad.</p>
        </div>
        </div>
    </div>
  )
}

export default Values
