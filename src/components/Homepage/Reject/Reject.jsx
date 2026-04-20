import React from "react";
import "./Reject.css";
import img61 from "../../../assets/img61.png";
import img62 from "../../../assets/img62.png";
import img63 from "../../../assets/img63.png";

const Reject = () => {
  return (
    <div className="reject">
      <div className="reject1">
        <h1>Recent news</h1>
      </div>
      <div className="container">
        <div className="text">
          <img src={img61} alt="" />
          <h3>How to Build Climate Change-Resilient Infrastructure</h3>

          <p>
            Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas
            faucibus. Tincidunt aliquet sit <br /> vel, venenatis nulla. Integer
            bibendum turpis convallis enim, nibh convallis...
          </p>
        </div>
        <div className="text1">
          <img src={img62} alt="" />
          <h5 style={{ color: "#FF5A30  " }}>
            How Construction Can Help Itself
          </h5>
          <p>Innovation | June 12, 2020 @ No comments</p>
          <div className="text2">
            <img src={img63} alt="" />
            <p>Innovation | June 12, 2020 @ No comments</p>
          </div>
        </div>
      </div>
      <div className="btns3">
        <h2>Explore all our news posts</h2>
        <button>View all news</button>
      </div>
    </div>
  );
};

export default Reject;
