"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('/images/homeBg.svg')",
      }}
      className="relative py-96 w-full px-[472px] max-md:px-5 max-md:py-24 max-md:max-w-full"
    >
      <div className="relative z-10 flex mt-[80px] md:mt-0 flex-col w-full max-w-[784px] text-center">
        <h2 className="text-6xl font-semibold text-blue-900 leading-[80px] max-md:text-4xl max-md:leading-[55px]">
          Redefining How Medicine Finds Answers
        </h2>
        <p className="mt-4 text-xl text-slate-700 max-md:text-lg max-md:leading-6">
          Evidence-based, AI-driven, and user-optimized clinical decision
          support solution.
        </p>
        <div className="flex gap-6 items-center justify-center mt-6 text-xl font-medium max-md:flex-col max-md:gap-4">
          <button className="px-6 py-3 text-white bg-black rounded-md max-md:w-full">
            Secure Your Spot!
          </button>
          <button className="px-6 py-3 text-black border border-black rounded-md max-md:w-full">
            Discover DrInfo!
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
