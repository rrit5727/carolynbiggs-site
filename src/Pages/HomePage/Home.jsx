import React from "react";
import './HomePage.css';
import Ocean2 from '../../assets/ocean2.mp4'

function HomePage() {

  return (
    <>
      <div className="intro bg-gradient-to-br from-blue-200 to-purple-200  h-screen w-screen">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
          <source src={Ocean2} type="video/mp4"/>
        </video>
        <h1>Intro</h1>
      </div>
      <div className="bg-yellow-300 h-screen w-screen">
        <h1>Services</h1>
      </div>
    </>
  )
}

export default HomePage