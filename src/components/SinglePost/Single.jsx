import React from 'react'
import "./Single.css"

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaReply } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";

import image from "../../assets/main-icon.jpg"

const comments = [
  {
    name: "Devon Lane",
    date: "July 15, 2020",
    text: "Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus.",
  },
  {
    name: "Annette Black",
    date: "1 day ago",
    text: "@Devon Lane Egestas fermentum natoque sollicitudin mauris.",
    highlight: true,
  },
  {
    name: "Albert Flores",
    date: "July 7, 2020",
    text: "Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc.",
  },
  {
    name: "Marvin McKinney",
    date: "June 28, 2020",
    text: "Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus.",
  },
];

const Single = () => {
  return (
    <div>

      {/* HEADER */}
      <div className="single-main">
        <h3>
          <a href="#" style={{ color: "black" }}>Homepage</a> /{" "}
          <a href="#">News</a> /{" "}
          <a href="#">How to Build Climate Change-Resilient Infrastructure</a>
        </h3>

        <h1>
          How to Build Climate Change-Resilient <br /> Infrastructure
        </h1>

        <div className="single-main-icons">
          <div className="icons-left">
            <a href="#">Industry News</a> |{" "}
            <MdOutlineAccessTime /> June 24, 2020 |{" "}
            <AiOutlineComment /> 165 comments
          </div>

          <div className="icons-right">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="image-main">
        <img src={image} alt="main" />
      </div>

      {/* ARTICLE */}
      <section className="article">
        <div className="container">
          <h2>
            Vulputate vitae pellentesque scelerisque luctus consequat mattis
            pellentesque dui odio.
          </h2>

          <p>
            At facilisi sapien posuere eget nec sed nec purus nullam. Tortor
            senectus in et sagittis.
          </p>

          <p>
            Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci
            interdum feugiat lectus libero duis.
          </p>

          <div className="quote">
            <span className="quote-icon">❝</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              amet lectus quam viverra mus lobortis.
            </p>
          </div>

          <ul>
            <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
            <li>Vulputate placerat amet pulvinar lorem nisl.</li>
            <li>Consequat feugiat habitant gravida quisque elit.</li>
            <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
          </ul>

          <div className="share">
            <span>Share:</span>
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>
      </section>

      {/* COMMENTS */}
      <section className="comments">
        <div className="container">
          <h2>4 comments</h2>

          {comments.map((item, index) => (
            <div className="comment" key={index}>
              <div className="left">
                <h4>{item.name}</h4>
                <span>{item.date}</span>
              </div>

              <div className="right">
                <p className={item.highlight ? "highlight" : ""}>
                  {item.text}
                </p>

                <div className="reply">
                  <FaReply />
                  <span>Reply</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <div className="main-input">
        <h1>Leave your comment</h1>
        <div className="name">
            <div className="name1">
                <label>Name</label>
        <input type="text" placeholder='Your Name'/>
            </div>

            <div className="name2">
                <label>Email</label>
                <input type="email" placeholder='Your working email'/>
            </div>
        </div>

        <div className="area">
            <label>Your Comment</label>
            <textarea placeholder='Type comment here'></textarea>
        </div>

        <button>POST COMMENT</button>
      </div>

    </div>
  )
}

export default Single;