import React from 'react'
import img31 from '../../../assets/img31.jpg'
import img32 from '../../../assets/img32.png'
import img33 from '../../../assets/img33.png'
import img34 from '../../../assets/img34.png'
import img35 from '../../../assets/img35.png'
import './Main1.css'
const Main1 = () => {
  return (
    <div className='main' style={{backgroundImage: `url(${img31})`}}>
      <div className="main1">
      <h1>CREATE <span style={{color:'red'}}>X</span> <br /> CONSTRUCTION</h1>
      <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque <br /> consequat, dignissim vitae proin ipsum sed. Pellentesque nec <br /> turpis purus eget pellentesque integer ipsum elementum felis. </p>
      <div className="btns">
        <button>Learn more about us</button>
        <button className='submit-btn' style={{backgroundColor: '#FF5A30', border: 'none'}}>SUBMIT REQUEST</button>
      </div>
      <div className="main2">
        <img src={img32} alt="" />
        <img src={img33} alt="" />
        <img src={img34} alt="" />
        <img src={img35} alt="" />

      </div>
     </div>
     
      
    </div>
  )
}

export default Main1
