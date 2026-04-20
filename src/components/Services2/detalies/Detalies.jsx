import React from 'react'
import "./Detalies.css"
import img65 from "../../../assets/img15.png"; 

const Detalies = () => {
  return (
    <div className='discuup' style={{ backgroundImage: `url(${img65})` }}>
      <div className="hero-section">
      <div className="overlay">
        <div className="content-container">
          <div className="form-wrapper">
            <h2 className="form-title">A quick way to discuss details</h2>
            
            <form className="contact-form">
              <div className="field">
                <label>Name</label>
                <input type="text" placeholder="Your name" required />
              </div>

              <div className="field">
                <label>Phone</label>
                <input type="tel" placeholder="Your phone number" required />
              </div>

              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="Your working email" />
              </div>

              <div className="field">
                <label>Message</label>
                <textarea placeholder="Your message" rows="3" required></textarea>
              </div>

              <div className="checkbox-area">
                <input type="checkbox" id="agree" required />
                <label htmlFor="agree">
                  I agree to receive communications from Createx Construction Bureau.
                </label>
              </div>

              <div className="btn-container">
                <button type="submit" className="send-btn">SEND REQUEST</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Detalies