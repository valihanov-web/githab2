import React from 'react'
import './Services.css'
import img1 from '../../../assets/img1.png'

const Design = () => {
  return (
    <div>
      <div className="container">
        <div className="page">
            <p>Homepage  /  Services  /  Interior Design</p>
            <h1>INTERIOR <br /> DESIGN</h1>
            <p>Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. <br /> Laoreet aenean vulputate elementum blandit amet.</p>
        </div>
        <div className="img">
            <img src={img1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Design
