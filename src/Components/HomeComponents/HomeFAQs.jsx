import React from "react"
import { Link } from "react-router-dom"

function HomeFAQs () {

    return (
      <div className="bg-gray-100 flex flex-row w-screen justify-around items-center  " style={{height: '80vh'}}>
        <div className="  bg-transparent flex flex-row justify-center">
          <div className="flex flex-col w-1/4">
            <img 
              src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              className=""
            />
          </div>
          <div className="w-2/5 px-12">
            <p className="text-4xl mb-3">FAQS</p>
            <p className="text-xl mb-3 font-bold">What happens in the counselling session?</p>
            <p className="text-xl mb-3">
              An initial consultation may take 90 minutes if there is more than one person being seen and thereafter most sessions are 60 minutes. The aim of the session is for you to talk about your concerns in a non-judgmental and caring atmosphere, to set goals that you want to work on and then work towards meeting those goals over a series of appointments. At any stage you are not happy with how the therapy is progressing please let me know so I can better address your needs.
            </p>
            <p className="text-xl mb-3 font-bold">Is therapy confidential?</p>
            <p className="text-xl mb-3">
              Yes therapy is confidential for the most part, except when there are concerns for a client or family member’s safety or well-being. If a family member has disclosed deliberate self harm or suicidal thoughts, plans or actions it is important to involve caring adults in safety planning procedures. There are times when a report may need to be made to FACS (Family or Community Services) or the police if a crime has been committed or a family member has been the victim of an assault or domestic violence. The confidentiality policy will be discussed in an open and honest way at the initial consultation so it is clear to all family members before therapy starts.
            </p>
          </div>
          
          <div className="">
            
          </div>
        </div>
      </div>
    )

}

export default HomeFAQs