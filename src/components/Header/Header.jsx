import React from 'react'
import './Header.css'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { PiChatsCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header>
        <h1>CREATE<span style={{color:'#FF5A30'}}>›‹</span></h1>

      <nav className="nav">
      <Link to="/">About</Link>
      <Link to="/Services">Services</Link>
      <Link to="/Work">Work</Link>
      <Link to="/News">News</Link>
      <Link to="/Contacts">Contacts</Link>
    </nav>
        <div className="header-icon">
          <div className="phone-icon">
            <IoPhonePortraitOutline style={{color:"#FF5A30"}}/>
          </div>

          <div className="phone-h1">
            <h6>Call us</h6>
            <p>(405) 555-0128</p>
          </div> 

          <div className="phone">
            <div className="phone-icon">
              <PiChatsCircle style={{color:"#FF5A30"}}/>
            </div>

            <div className="phone-h1">
              <h6>Talk to us</h6>
              
              <p>hello@createx.com</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header