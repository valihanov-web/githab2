import React from 'react'
import "./Contacts.css"
import img78 from "../../../assets/img78.png"
const Contacts = () => {
  return (
    <div className='contacts' style={{backgroundImage: `url(${img78})`}}>
      <h4>Homepage <span style={{color: "#9A9CA5"}}>/Contacts</span></h4>
      <h1>CONTACTS</h1>
      <p>Contact us for all your construction needs. We always welcome <br /> any questions and comments.</p>
    </div>
  )
}

export default Contacts