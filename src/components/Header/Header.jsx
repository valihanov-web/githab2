import React from 'react'
import './Header.css'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { PiChatsCircle } from "react-icons/pi";
const Header = () => {
  return (
    <div>
      <header>
        <h1>CREATE<span style={{color:'#FF5A30'}}>›‹</span></h1>

        <nav>
          <ul>
            <li><a href="#"><span style={{color:'#FF5A30'}}>About Us</span></a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </nav>

        <div className="header-icon">
            <div className="phone-icon"><IoPhonePortraitOutline  style={{color:"#FF5A30"}}/></div>
            <div className="phone-h1">
              <h6>Call us</h6>
              <p>(405) 555-0128</p>
          </div> 

          <div className="phone">
            <div className="phone-icon"><PiChatsCircle style={{color:"#FF5A30"}}/></div>
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