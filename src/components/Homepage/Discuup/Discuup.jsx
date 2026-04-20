import React from 'react'
import "./Discuup.css"
import img80 from "../../../assets/img80.png"
const Discuup= () => {
  return (
    <div className='quick' style={{backgroundImage: `url(${img80})`}}>
      
      <div className="quick-overlay">
        <div className="quick-container">

          <div className="quick-form">
            <h2 className="quick-title">A quick way to discuss details</h2>

            <form className="quick-form-box">
              
              <div className="quick-field">
                <label>Name</label>
                <input type="text" placeholder="Your name" required />
              </div>

              <div className="quick-field">
                <label>Phone</label>
                <input type="tel" placeholder="Your phone number" required />
              </div>

              <div className="quick-field">
                <label>Email</label>
                <input type="email" placeholder="Your working email" />
              </div>

              <div className="quick-field">
                <label>Message</label>
                <textarea placeholder="Your message" rows="3" required></textarea>
              </div>

              <div className="quick-check">
                <input type="checkbox" id="agree" required />
                <label htmlFor="agree">
                  I agree to receive communications from Createx Construction Bureau.
                </label>
              </div>

              <div className="quick-btn-box">
                <button type="submit" className="quick-btn">
                  SEND REQUEST
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Discuup