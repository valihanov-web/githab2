import React, { useState } from 'react'
import "./About.css"
import aboutImage from "../../assets/about.png"
import like from "../../assets/like.svg"
import painting from "../../assets/ic-painting.svg"
import helmet from "../../assets/ic-helmet.svg"
import pantone from "../../assets/ic-pantone.svg"
import CEO from "../../assets/CEO.jpg"
import likeIcon from "../../assets/like.svg"
import safetyIcon from "../../assets/ic-helmet.svg"
import comfortIcon from "../../assets/ic-pantone.svg"
import logo1 from "../../assets/client-logo-10.png"
import logo7 from "../../assets/client-logo.png"
import logo2 from "../../assets/client-logo-1.png"
import logo3 from "../../assets/client-logo-2.png"
import logo4 from "../../assets/client-logo-3.png"
import logo5 from "../../assets/client-logo-4.png"
import logo6 from "../../assets/client-logo-5.png"
import logo8 from "../../assets/client-logo-6.png"
import logo9 from "../../assets/client-logo-7.png"
import logo10 from "../../assets/client-logo-8.png"
import logo11 from "../../assets/client-logo-9.png"
import logo12 from "../../assets/client-logo-11.png"
import image1 from "../../assets/image-1.png"
import image2 from "../../assets/image-2.png"
import image3 from "../../assets/image-3.png"
import image4 from "../../assets/image-4.png"
import image5 from "../../assets/image-5.png"
import image6 from "../../assets/image-6.png"
import image7 from "../../assets/image-7.png"
import image8 from "../../assets/image.png"
import Map from "../../assets/map.svg"


const TIMELINE = [
  {
    label: 'Present',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    text: 'Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis.',
  },
  {
    label: 'March 2019',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    text: 'In 2019 we expanded our operations across five new regions, completing 34 major infrastructure projects ahead of schedule and under budget.',
  },
  {
    label: 'November 2018',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&q=80',
    text: 'Launched our signature sustainable construction programme, setting a new industry benchmark for eco-friendly building practices.',
  },
  {
    label: 'July 2015',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80',
    text: 'Completed our first landmark skyscraper project, earning three international architecture awards and recognition from global industry bodies.',
  },
  {
    label: 'August 2010',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80',
    text: 'Crossed the milestone of 1,000 successful project completions, solidifying our reputation as a leading construction bureau.',
  },
  {
    label: 'February 2007',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    text: 'Opened our first international office, marking the beginning of our global expansion strategy.',
  },
  {
    label: 'May 2004',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    text: 'Received ISO 9001 certification, demonstrating our commitment to quality management and continuous improvement.',
  },
  {
    label: 'October 2001',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&q=80',
    text: 'Secured our first government contract, a pivotal moment that shaped the direction of the company.',
  },
  {
    label: 'June 2000',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80',
    text: 'Founded in 2000 with a vision to redefine construction excellence. Our first project was a modest residential complex that laid the foundation for everything to come.',
  },
]

const About = () => {
  const [active, setActive] = useState(0)

  const handlePrev = () => setActive((i) => Math.max(0, i - 1))
  const handleNext = () => setActive((i) => Math.min(TIMELINE.length - 1, i + 1))

  const current = TIMELINE[active]

  return (
    <div>

      {/* ── HERO ── */}
      <div className="main">
        <div className="main-left">
          <h3><a href="#">Homepage</a> / <a href="#">About Us</a></h3>
          <h1>About Us</h1>
          <p>Createx Construction Bureau has been successfully operating <br />
            in the USA construction market since 2000. We are proud to offer <br />
            you quality construction and exemplary service.</p>
        </div>
        <div className="main-right">
          <img src={aboutImage} alt="img" />
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="section">
        <div className="like">
          <img src={like} alt="like" />
          <h1>60%</h1>
          <p>Clients on the recommendation of friends</p>
        </div>
        <div className="like">
          <img src={painting} alt="painting" />
          <h1>2400+</h1>
          <p>Apartments renovated</p>
        </div>
        <div className="like">
          <img src={helmet} alt="helmet" />
          <h1>670</h1>
          <p>Qualified specialists</p>
        </div>
        <div className="like">
          <img src={pantone} alt="pantone" />
          <h1>150000+ m²</h1>
          <p>Finishing work was carried out</p>
        </div>
      </div>

       {/* ── CEO QUOTE ── */}
      <section className="ceo-section">
        <div className="ceo-image-wrap">
          <img src={CEO} alt="Courtney Alexander - CEO" />
        </div>
        <div className="ceo-content">
          <div className="quote-mark">
            <span /><span />
          </div>
          <p className="quote-primary">
            Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in.{' '}
            <strong>Sed aliquet in egestas hac at proin sed quam.</strong>{' '}
            Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus purus
            vestibulum ut blandit et mi. Odio massa purus vel praesent arcu enim elit felis viverra.
          </p>
          <p className="quote-secondary">
            Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet
            eleifend amet. Vet suspendisse faucibus tempor ipsum integer.
          </p>
          <div className="quote-divider" />
          <div className="ceo-footer">
            <div className="ceo-info">
              <h4>Courtney Alexander</h4>
              <p>CEO - Createx Construction Bureau</p>
            </div>
            <div className="ceo-signature">
              <svg viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#e8411a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 38 C18 10, 30 8, 36 20 C40 28, 38 36, 44 34 C52 30, 54 18, 60 20 C68 24, 64 38, 72 34 C80 30, 82 18, 90 22 C96 26, 94 36, 100 34 C106 32, 108 26, 112 28" />
                <path d="M60 40 C68 38, 78 42, 86 40" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="core-values">
        <h2 className="cv-title">Our core values</h2>
        <p className="cv-subtitle">Our mission is to set the highest standards for construction sphere.</p>
        <div className="cv-grid">
          <div className="cv-item">
            <img src={likeIcon} alt="Quality" className="cv-icon"/>
            <h3 className="cv-name">Quality</h3>
            <p className="cv-desc">Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
          </div>
          <div className="cv-item">
            <img src={safetyIcon} alt="Safety" className="cv-icon" />
            <h3 className="cv-name">Safety</h3>
            <p className="cv-desc">Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.</p>
          </div>
          <div className="cv-item">
            <img src={comfortIcon} alt="Comfort" className="cv-icon" />
            <h3 className="cv-name">Comfort</h3>
            <p className="cv-desc">Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</p>
          </div>
        </div>
      </section>

      {/* ── OUR HISTORY ── */}
      <section className="our-history">
        <div className="history-header">
          <h2 className="history-title">Our history</h2>
          <div className="history-nav">
            <button className="nav-btn prev" onClick={handlePrev} disabled={active === 0} aria-label="Previous">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 3L5 8l5 5"/></svg>
            </button>
            <button className="nav-btn next" onClick={handleNext} disabled={active === TIMELINE.length - 1} aria-label="Next">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 3l5 5-5 5"/></svg>
            </button>
          </div>
        </div>

        <div className="history-body">
          <ul className="timeline-list">
            {TIMELINE.map((item, i) => (
              <li
                key={item.label}
                className={`timeline-item${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="timeline-dot" />
                <span className="timeline-label">{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="history-panel" key={active}>
            <img className="history-image" src={current.image} alt={current.label} />
            <p className="history-text">{current.text}</p>
          </div>
        </div>
      </section>


      <div className="section-our">
        <h1>Our partners</h1>
        <p>We are supported by 12+ industry bodies and media partners</p>
        <div className="our-logo">
          <img src={logo1} alt="img" />
          <img src={logo2} alt="img" />
          <img src={logo3} alt="img" />
          <img src={logo4} alt="img" />
          <img src={logo5} alt="img" />
          <img src={logo12} alt="img" />
        </div>
        <div className="our-logo">
          <img src={logo7} alt="img" />
          <img src={logo8} alt="img" />
          <img src={logo9} alt="img" />
          <img src={logo10} alt="img" />
          <img src={logo11} alt="img" />
          <img src={logo6} alt="img" />
        </div>
      </div>

      <div className="section-teams">
        <h1>Our team</h1>
        <p>People are at the heart of Createx Construction Bureau</p>
        <div className="row-team1">

          <div className="col-team">
            <img src={image7} alt="img" />
            <h2>Courtney Alexander</h2>
            <p>CEO, Co-Founder</p>
          </div>

          <div className="col-team">
            <img src={image6} alt="img" />
            <h2>Calvin Fox</h2>
            <p>CEO, Co-Founder</p>
          </div>

          <div className="col-team">
            <img src={image5} alt="img" />
            <h2>Johnny Lane</h2>
            <p>Commercial Manager</p>
          </div>

          <div className="col-team">
             <img src={image4} alt="img" />
            <h2>Diane Mccoy</h2>
            <p>Director of Human Resources</p>
          </div>
        </div>


        <div className="row-team2">

          <div className="col-team">
            <img src={image3} alt="img" />
            <h2>Judith Warren</h2>
            <p>Lead Accountant</p>
          </div>

          <div className="col-team">
           <img src={image2} alt="img" />
            <h2>Floyd Simmmons</h2>
            <p>Finacial Director</p>
          </div>

           <div className="col-team">
           <img src={image1} alt="img" />
            <h2>Serenity Edwards</h2>
            <p>Director of Marketing</p>
          </div>

           <div className="col-team">
            <img src={image8} alt="img" />
            <h2>Shawn Edwards</h2>
            <p>Tech Lead</p>
          </div>

        </div>

        <div className="teams-link">
          <h3>Become a part of the best team in the construction market of the USA. </h3>
          <a href="#">Available Positions</a>
        </div>


      </div>

      <div className="section-map">
        <h1>We work worldwide</h1>
        <img src={Map} alt="map" />
      </div>

     

    </div>
  )
}

export default About