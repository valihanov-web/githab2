import React from "react";
import "./Offices.css";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Offices = () => {
  return (
    <div className="offices">
      <h1 className="title">Our offices</h1>
      <p className="subtitle">
        Give us a call, send us a note or visit our office. We can't wait to hear from you!
      </p>

      <div className="offices-container">
        <div className="office">
          <h3>New York, USA</h3>
          <p>8502 Preston Rd. Inglewood, New York 98380</p>
          <a href="#">See on the map</a>
          <p>Call: (405) 555-0128</p>
          <p>Email: hello@createx.com</p>
          <p>Schedule: Mon - Fri 9:00 - 18:00</p>
        </div>

        <div className="office">
          <h3>New Jersey, USA</h3>
          <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
          <a href="#">See on the map</a>
          <p>Call: (808) 555-0111</p>
          <p>Email: hello@createx.com</p>
          <p>Schedule: Mon - Fri 9:00 - 18:00</p>
        </div>

        <div className="office">
          <h3>San Francisco, USA</h3>
          <p>8502 Preston Rd. Inglewood, San Francisco 98380</p>
          <a href="#">See on the map</a>
          <p>Call: (505) 555-0125</p>
          <p>Email: hello@createx.com</p>
          <p>Schedule: Mon - Fri 10:00 - 19:00</p>
        </div>
      </div>

      <h2 className="find">Find us at</h2>

      <div className="icons">
        <FaWhatsapp />
        <MdEmail />
        <FaFacebookF />
        <FaTwitter />
        <FaYoutube className="youtube" />
      </div>
    </div>
  );
};

export default Offices;
