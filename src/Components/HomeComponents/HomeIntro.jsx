import React from "react"
import { Link } from "react-router-dom"

function HomeIntro () {

    return (
      <div className="bg-gray-100 flex w-screen  justify-center" style={{height: '80vh'}}>
        <div className="w-3/4 py-20">
          <h1 className=""> </h1>
          <p className=" pt-10 text-5xl">
            Carolyn Biggs (BSW Hons., MS., MAASW)
          </p>
          <p className=" pt-10 text-3xl">
            Carolyn is a Mental Health Social Worker accredited with Medicare, Australia. 
          </p>
          <p className=" pt-10 text-3xl">
            She has more than 20 years of experience working as a mental health psycho-social therapist with adults, adolescents, children and families. 
          </p>
          <p className=" pt-10 text-3xl">
            Read more <Link to="/about"> here </Link>
          </p>
          
        </div>
      </div>
    )

}

export default HomeIntro