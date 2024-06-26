import React from "react";
import './HomePage.css';
import Ocean2 from '../../assets/ocean2.mp4'
import { Link } from "react-router-dom";
import HomeIntro from '../../Components/HomeComponents/HomeIntro';
import HomeServices from "../../Components/HomeComponents/HomeServices";
import WhereToStart from "../../Components/HomeComponents/WhereToStart";
import HomeFAQs from "../../Components/HomeComponents/HomeFAQs";


function HomePage() {

  return (
    <>
      <div className="intro relative bg-transparent  h-screen w-screen">
        <video className="absolute top-0 left-0 px-0 w-full h-full object-cover" autoPlay loop muted>
          <source src={Ocean2} type="video/mp4"/>
        </video>
      </div>
      <HomeIntro />
      <HomeServices />
      <WhereToStart />
      <HomeFAQs />
      
    </>
  )
}

export default HomePage