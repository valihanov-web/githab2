import React from 'react';
import './Modern.css';
import workerImg from '../../../assets/work.jpg'; // Rasmni assets'dan import qilish

const Modern = () => {
  const points = [
    "Vitae ultrices ornare eu sed in est quisque duis id.",
    "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
    "Mauris odio pellentesque commodo, diam.",
    "Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.",
    "At pharetra libero blandit risus, fringilla sed commodo diam.",
    "Integer ultricies viverra ut enim viverra ut."
  ];

  return (
   
  
    <section className="constructive-section">
      <div className="constructive-container">
        
        {/* Chap tomondagi rasm */}
        <div className="image-wrapper">
          <img src={workerImg} alt="Constructor worker" className="worker-image" />
        </div>

        {/* O'ng tomondagi matn qismi */}
        <div className="content-wrapper">
          <h2 className="section-title">Constructive decisions</h2>
          
          <ul className="points-list">
            {points.map((text, index) => (
              <li key={index} className="point-item">
                <span className="check-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <p className="point-text">{text}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
    );
};

export default Modern
