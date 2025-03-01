"use client";

import { useState } from "react";
import { ChevronDown, X, User } from "lucide-react";
import ConfirmModel from "./ConfirmModel";

export default function WaitlistModal({ setIsModalOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isConfirm, setIsconfirm] = useState(false);

  const roles = [
    "Physician",
    "Medical Student",
    "Nurse",
    "Pharmacist",
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">

     {!isConfirm ? ( <div className="relative w-full max-w-xl p-8 mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f8ff] to-[#f3f7ff] opacity-80 z-0"></div>

        <button className="absolute top-6 right-6 z-10" onClick={() => setIsModalOpen(false)}>
          <X className="w-6 h-6 text-[#263969]" />
        </button>

        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#b1c7ff] to-[#f3f7ff]">
            <User className="w-6 h-6 text-[#3771fe]/70" />
          </div>

          <h2 className="mb-8 text-center">
            <span className="text-3xl font-medium text-[#263969]">Join the waitlist for the</span>
            <br />
            <span className="text-2xl font-medium text-[#b29efa]">Dr.Info!</span>
          </h2>

          <form className="w-full space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-[#b1c7ff]/50 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#3771fe]/30"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-[#b1c7ff]/50 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#3771fe]/30"
            />

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-left border border-[#b1c7ff]/50 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#3771fe]/30"
              >
                <span className={role ? "text-black" : "text-gray-400"}>{role || "Your current role"}</span>
                <ChevronDown className="w-5 h-5 text-[#969696]" />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-20 h-[128px] overflow-y-auto w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {roles.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 cursor-pointer hover:bg-[#f3f7ff]"
                      onClick={() => {
                        setRole(option);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsconfirm(true)}
              type="submit"
              className="w-full py-3 mt-2 text-white font-medium rounded-lg bg-[#0049ff] hover:bg-[#3771fe] transition-colors"
            >
              Join the waiting list
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-[#969696]">
            <p>Dr.Info is coming soon</p>
            <p>
              Designed by{" "}
              <a href="#" className="text-[#3771fe]">
                @Synduct
              </a>{" "}
              to give you back your time
            </p>
          </div>
        </div>
      </div>
      ) :
      (<ConfirmModel setIsconfirm={setIsconfirm}/>) 
      } 
     
    </div>
  );
}
