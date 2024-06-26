import React from "react"
import { Link } from "react-router-dom"

function WhereToStart () {

    return (
      <div className="bg-gray-300 flex flex-row w-screen justify-around items-center  " style={{height: '80vh'}}>
        <div className="  bg-transparent flex flex-row justify-center">
          <div className="w-2/5 px-12">
            <p className="text-4xl mb-3">Where to Start</p>
            <p className="text-xl mb-7">Please contact me to discuss making an appointment and referral options.  You do not need a doctor’s referral to see me but you may be eligible for one through your GP using one of the following pathways:</p>
            <p className="text-xl mb-3">Referral Pathways:</p>
            <ul className="list-disc pl-10 text-xl">
              <li className="mb-2">
                <Link className="underline"
                  to="https://www.health.gov.au/our-work/better-access-initiative">Better Access to Mental Health Care
                </Link>
              </li>
              <li className="mb-2">
                <Link className="underline"
                  to="https://www.carolynbiggs.com/_files/ugd/eb25c4_6959b13d04c844b9a7e4b39c86595501.pdf">Better Access to Mental Health Care (PDF FACT SHEET)
                </Link>
              </li>
              <li className="mb-2">
                <Link className="underline"
                  to="https://www.health.gov.au/topics/chronic-conditions/managing-chronic-conditions?utm_source=health.gov.au&utm_medium=callout-auto-custom&utm_campaign=digital_transformation">Chronic Disease Management Program (CDM)
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col w-1/4">
            <img 
              src="https://static.wixstatic.com/media/b3ec28bce6f242c8a04ecb618b3dcd3d.jpg/v1/fill/w_380,h_456,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b3ec28bce6f242c8a04ecb618b3dcd3d.jpg" 
              className=""
            />
          </div>
          
          <div className="">
            
          </div>
        </div>
      </div>
    )

}

export default WhereToStart