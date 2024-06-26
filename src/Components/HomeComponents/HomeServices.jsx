import React from "react"
import { Link } from "react-router-dom"

function Services () {

    return (
      <div className="bg-gray-200 flex flex-row w-screen justify-around items-center  " style={{height: '80vh'}}>
        <div className="  bg-transparent flex flex-row">
          <div className="flex flex-col w-1/3">
            <img 
              src="https://static.wixstatic.com/media/8e2a95a81bd67d6d59f9fc086239d1be.jpg/v1/fill/w_380,h_678,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8e2a95a81bd67d6d59f9fc086239d1be.jpg" 
              className=""
            />
          </div>
          
          <div className="pt-10 pl- px-12">
            <p className="text-4xl mb-3">Services</p>
            <p className="text-xl mb-7">I am experienced in, and can assist with, a wide range of difficulties including:</p>
            <ul className="list-disc pl-10 text-xl">
              <li className="mb-2">Depression / Mood Disorders </li>
              <li className="mb-2">Suicidal Thoughts / Self Harm </li>
              <li className="mb-2">Parent – child disharmony and relationship issues </li>
              <li className="mb-2">Child/adolescent emotional or behavioural problems </li>
              <li className="mb-2">Grief and loss </li>
              <li className="mb-2">Anger management and conduct disorder (Excluding ADD and ADHD) </li>
              <li className="mb-2">Alcohol and other substance issues </li>
              <li className="mb-2">Family relationships </li>
              <li className="mb-2">Eating disorders </li>
            </ul>
          </div>
          
          <div className="">
            
          </div>
        </div>
      </div>
    )

}

export default Services