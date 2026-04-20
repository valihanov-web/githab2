import React from 'react'
import './News.css'
import news1 from '../../../assets/img1.png'

const News = () => {
  return (
    <div>
        <div className="news">
            <div className="export">
        <p>Homepage / News</p>
      <h1> NEWS </h1>
      <p>Stay tuned with our news, expert tips and articles.</p>
      </div>
      <div className="tips">
         <img src={news1} alt="" />
      </div>
      </div>
    </div>
  )
}

export default News
