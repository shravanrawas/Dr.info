"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function ConfirmModel({ setIsconfirm}) {
  const [email, setEmail] = useState("")


  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="relative w-full max-w-md rounded-3xl bg-[#e8efff] p-8 shadow-lg">

        <button onClick={() => setIsconfirm(false)} className="absolute right-6 top-6 text-[#232d46]">
          <X size={24} />
        </button>

      
        <div className="mx-auto mb-12 flex h-24 w-24 items-center justify-center">
          <div className="relative flex h-20 w-20 items-center justify-center">
          
            <div className="absolute inset-0 rounded-full bg-[#00d223]/10"></div>
            <div className="absolute inset-[15%] rounded-full bg-[#00d223]/20"></div>
            <div className="absolute inset-[30%] rounded-full bg-[#00d223]/30"></div>

          
            <div className="relative z-10 text-[#00d223]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M5 18C5 15.7909 6.79086 14 9 14H15C17.2091 14 19 15.7909 19 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

       
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#263969]">We've added you to our waiting list!</h1>
          <p className="text-xl text-[#969696]">
            We'll let you know when <span className="text-purple-500 font-medium">Dr.Info</span> is ready
          </p>
        </div>

        
        <div className="mb-8 rounded-lg bg-[#d7e3ff]/50 p-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Example@gmail.com"
            className="w-full rounded-lg border border-[#d7e3ff] bg-transparent p-4 text-[#263969] placeholder-[#969696]/70 focus:outline-none focus:ring-2 focus:ring-[#d7e3ff]"
          />
        </div>

       
        <div className="text-center text-[#969696]">
          <p className="mb-1">Dr.Info is coming soon</p>
          <p>
            Designed by{" "}
            <a href="#" className="text-[#4285F4] hover:underline">
              @Synduct
            </a>{" "}
            to give you back your time
          </p>
        </div>
      </div>
    </div>
  )
}

