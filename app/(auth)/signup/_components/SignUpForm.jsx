"use client";

import React from "react";
import SocialLoginSection from "./SocialLoginSection";
import InputField from "./InputField";
import Divider from "./Divider";
import Link from "next/link";


const SignUpForm = () => {
  return (
    <section className="flex flex-col mt-5 w-full max-md:mt-10 max-md:max-w-full">
      <header className="flex flex-col items-start self-end max-w-full text-4xl text-center text-slate-600 w-[563px]">
       <Link className='object-contain self-end w-9 aspect-square' href="/">
       <img
          src="https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/15e1ca07bab7518d57caa60318e3aaf3f86a79925676de1170cb7a95fcf796d2?placeholderIfAbsent=true"
          className="object-contain self-end w-9 aspect-square"
          alt="Header decoration"
        />
       </Link>
        <h1 className="mt-28 ml-32 max-md:mt-10 max-md:ml-2.5">Sign Up</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/5462c6047103deba9d8a17e38a9d7feaa690975d461c206683e5bc1bb7cd7864?placeholderIfAbsent=true"
          className="object-contain self-center aspect-[34.48] w-[69px]"
          alt="Divider"
        />
        <h2 className="mt-7">Create a New Account</h2>
        <p className="ml-16 text-base max-md:ml-2.5">
          Sign up to get started with Drinfo
        </p>
      </header>

      <form className="mt-12">
        <div className="flex flex-wrap gap-4 text-xl text-slate-600 max-md:mt-10 max-md:max-w-full">
          <InputField placeholder="First Name" />
          <InputField placeholder="Last Name" />
        </div>

        <div className="mt-4">
          <InputField placeholder="Email" fullWidth />
        </div>

        <div className="mt-4">
          <InputField
            type="password"
            placeholder="Enter your password"
            fullWidth
            icon={
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/97512b21096d814800dfe4a7bb239a03c8639aea847a8013a22e33dc36c034fe?placeholderIfAbsent=true"
                className="object-contain w-6 aspect-square"
                alt="Show password"
              />
            }
          />
        </div>

        <label className="flex items-center gap-3 self-start mt-3.5 text-base text-center text-slate-600">
          <input
            type="checkbox"
            className="w-8 h-8 rounded-md border border-solid bg-slate-400 bg-opacity-10 border-slate-600"
          />
          <span >
            I agree to the Terms & Conditions
          </span>
        </label>

        <button
          type="submit"
          className="w-full px-16 py-5 mt-9 text-xl font-medium text-center text-white whitespace-nowrap bg-blue-500 rounded-xl max-md:px-5 max-md:max-w-full"
        >
          Continue
        </button>
      </form>

      <Divider />
      <SocialLoginSection />

      <footer className="flex gap-1.5 items-center self-center mt-4 text-base text-center">
        <p className="self-stretch my-auto text-slate-600">
          Already have an account?
        </p>
        <Link href="/login" className="self-stretch my-auto text-blue-700">
          Log In
        </Link>
      </footer>
    </section>
  );
};

export default SignUpForm;
