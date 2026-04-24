import React from 'react'
import './That.css'
import img2 from '../../../assets/img2.jpg'

const That = () => {
  return (
    <div>
      <div className="offer">
        <div className="design">
            <img src={img2} alt="" />
        </div>
        <div className="private">
          <h2>We offer</h2>
          <h4>Interior design of <br /> apartments </h4>
          <p>Adipiscing nunc arcu enim elit mattis eu placerat <br /> proin. Imperdiet elementum faucibus dignissim <br /> purus. Fusce parturient diam magna ullamcorper brf
          <br /> morbi semper massa ac facilisis.</p>
          <h4>Interior design of private houses</h4>

        </div>
      </div>
    </div>
  )
}

export default That
