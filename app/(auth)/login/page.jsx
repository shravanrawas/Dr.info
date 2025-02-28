"use client";

import { useState } from "react";
import { X, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-5xl bg-[#eaf0ff] rounded-xl overflow-hidden shadow-2xl flex">
      
        <div
          style={{
            backgroundImage: `url(${
              isLogin ? "/images/loginImg.png" : "/images/signupImg.png"
            })`,
          }}
         className="w-2/5 relative hidden md:block"
        ></div>

      
        <div className="w-full md:w-3/5 bg-[#eaf0ff] p-8 relative flex flex-col">
          <Link href="/">
            <button className="absolute top-4 right-4 text-[#4f576c]">
              <X size={20} />
            </button>
          </Link>

          <div className="mt-8 max-w-md mx-auto h-full flex flex-col justify-center min-h-[500px] md:min-h-[600px]">
            {isLogin ? (
              <>
                <h2 className="text-center text-[#4f576c] text-xl font-medium pb-1">
                  Login
                </h2>

                <div className="text-center mt-4">
                  <h1 className="text-3xl font-medium text-[#4f576c] mb-1">
                    Welcome Back to DrInfo
                  </h1>
                  <p className="text-[#909cb9] text-sm">
                    Enter your credentials to access your account.
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 rounded-md border border-[#b2b7c5] bg-white focus:outline-none focus:ring-2 focus:ring-[#3771fe]"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 rounded-md border border-[#b2b7c5] bg-white focus:outline-none focus:ring-2 focus:ring-[#3771fe]"
                  />
                  <div className="flex justify-end">
                    <button className="text-sm text-[#909cb9]">
                      Forgot Password?
                    </button>
                  </div>

                  <button className="w-full bg-[#3771fe] text-white py-3 rounded-md hover:bg-[#004aff] transition-colors">
                    Continue
                  </button>
                </div>

                <div className="mt-6 flex items-center justify-center gap-4">
                  <div className="h-px bg-[#b2b7c5] flex-1"></div>
                  <span className="text-[#909cb9]">Or</span>
                  <div className="h-px bg-[#b2b7c5] flex-1"></div>
                </div>

                <div className="mt-6 flex justify-center gap-6">
                  <button className="p-2 rounded-full">
                    <Linkedin size={24} className="text-[#4f576c]" />
                  </button>
                  <button className="p-2 rounded-full">
                    <img
                      className="w-6 h-6 object-cover"
                      src="/icons/google.svg"
                      alt="Google"
                    />
                  </button>
                  <button className="p-2 rounded-full">
                    <Facebook size={24} className="text-[#4f576c]" />
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-[#909cb9]">
                    Don't have an account?
                    <button
                      className="text-[#3771fe] ml-1 font-medium"
                      onClick={() => setIsLogin(false)}
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-center text-[#4f576c] text-xl font-medium pb-1">
                  Sign Up
                </h2>

                <div className="text-center mt-4">
                  <h1 className="text-3xl font-medium text-[#4f576c] mb-1">
                    Create a New Account
                  </h1>
                  <p className="text-[#909cb9] text-sm">
                    Sign up to get started with DrInfo
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-3 rounded-md border border-[#b2b7c5] bg-white focus:outline-none focus:ring-2 focus:ring-[#3771fe]"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-3 rounded-md border border-[#b2b7c5] bg-white focus:outline-none focus:ring-2 focus:ring-[#3771fe]"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md border border-[#b2b7c5] bg-white focus:outline-none focus:ring-2 focus:ring-[#3771fe]"
                  />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-3 rounded-md border border-[#b2b7c5] bg-white focus:outline-none focus:ring-2 focus:ring-[#3771fe]"
                  />

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 border-[#b2b7c5] rounded"
                    />
                    <label htmlFor="terms" className="text-sm text-[#4f576c]">
                      I agree to the Terms & Conditions
                    </label>
                  </div>

                  <button className="w-full bg-[#3771fe] text-white py-3 rounded-md hover:bg-[#004aff] transition-colors">
                    Continue
                  </button>
                </div>

                <div className="mt-6 flex items-center justify-center gap-4">
                  <div className="h-px bg-[#b2b7c5] flex-1"></div>
                  <span className="text-[#909cb9]">Or</span>
                  <div className="h-px bg-[#b2b7c5] flex-1"></div>
                </div>

                <div className="mt-6 flex justify-center gap-6">
                  <button className="p-2 rounded-full">
                    <Linkedin size={24} className="text-[#4f576c]" />
                  </button>
                  <button className="p-2 rounded-full">
                    <img
                      className="w-6 h-6 object-cover"
                      src="/icons/google.svg"
                      alt="Google"
                    />
                  </button>
                  <button className="p-2 rounded-full">
                    <Facebook size={24} className="text-[#4f576c]" />
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-[#909cb9]">
                    Already have an account?
                    <button
                      className="text-[#3771fe] ml-1 font-medium"
                      onClick={() => setIsLogin(true)}
                    >
                      Log In
                    </button>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
