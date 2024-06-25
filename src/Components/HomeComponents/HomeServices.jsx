import React from "react"
import { Link } from "react-router-dom"

function Services () {

    return (
      <div className="bg-gray-200 flex flex-row w-screen justify-center items-center  p-5" style={{height: '80vh'}}>
        <div className="w-4/5 h-4/5 bg-white flex flex-row">
          <div className="flex flex-col w-1/4">
            <img src="https://static.wixstatic.com/media/fe7c63d6306ec3f076aabdef5a19bfaf.jpg/v1/fill/w_380,h_554,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fe7c63d6306ec3f076aabdef5a19bfaf.jpg" />
          </div>
          <div className="w-1/2  p-4">
            <p className="text-4xl">Services</p>
            <p className="text-xl mb-3">I am experienced in and can assist with a wide range of difficulties including:</p>
            <ul className="list-disc pl-4 text-xl">
              <li className="mb-2">Depression / Mood Disorders </li>
              <li className="mb-2">Suicidal Thoughts / Self Harm </li>
              <li className="mb-2">Parent – child disharmony and relationship issues </li>
              <li className="mb-2">Child/adolescent emotional or behavioural problems </li>
              <li className="mb-2">Grief and loss </li>
              <li className="mb-2">Anger management and conduct disorder (Excluding ADD and ADHD) </li>
              <li className="mb-2">Alcohol and other substance issues </li>
              <li className="mb-2">Family relationships </li>
              <li className="mb-2">Eating disorders </li>
              <li className="mb-2">Adjusting to stressful life events: separation, divorce and reorganization of families </li>
            </ul>
          </div>
          <div className="w-1/4 h-2/3 bg-teal-500 text-xl text-center flex flex-col justify-center items-center">
              <p className="leading-relaxed text-white">
                <span className="underline">Contact</span> Carolyn to arrange an initial consultation or to discuss your needs <Link className="underline">ctbiggs@bigpond.net.au</Link> 0422 919 822
              </p>
          </div>
          <div className="">
            
          </div>
        </div>
      </div>
    )

}

export default Services