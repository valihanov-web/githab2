import React from "react";
import "./Please.css";
import img79 from "../../../assets/img79.jpg";

const Please = () => {
  return (
    <div className="please">
      <div className="please-container">
        <h1 className="title">Contact us</h1>
        <p className="subtitle">
          Please complete the form. Detailed information will help us to make a tuned offer.
        </p>

        <div className="please-content">
          <div className="left">
            <img src={img79} alt="contact" />
          </div>

          <div className="right">

            <div className="form-row">
              <div className="input-group">
                <label>Name*</label>
                <input type="text" placeholder="Your name" />
              </div>

              <div className="input-group">
                <label>I am interested in</label>
                <select>
                  <option>Interior Design</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Phone*</label>
                <input type="text" placeholder="Your phone number" />
              </div>

              <div className="input-group">
                <label>Location*</label>
                <select>
                  <option>New York</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Your working email" />
              </div>

              <div className="input-group">
                <label>Preferred contact method</label>
                <div className="radio-group">
                  <label><input type="radio" name="contact" defaultChecked /> Phone</label>
                  <label><input type="radio" name="contact" /> Email</label>
                  <label><input type="radio" name="contact" /> Viber</label>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group full">
                <label>Message*</label>
                <textarea placeholder="Your message"></textarea>
              </div>
            </div>

            <div className="form-row bottom">
              <div className="checkbox">
                <input type="checkbox" />
                <span>
                  I agree to receive communications from <br />
                  Createx Construction Bureau.
                </span>
              </div>

              <button className="btn">SEND REQUEST</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Please;