"use client";
import React from "react";
import Querysection from "./Querysection";

const HeroSection = () => {
  return (
    <div className="main-container w-[1729px] h-[1660px] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[1728px] h-[1117px] pt-[339px] pr-[472px] pb-[339px] pl-[472px] flex-col gap-[8px] items-start flex-nowrap bg-[#fff] absolute top-0 left-0">
        <div className="w-[1728px] h-[1117px] shrink-0 bg-[url(https://static.codia.ai/image/2025-02-28/16379d13-4f17-42ac-97cc-82fdf8d80920.png)] bg-cover bg-no-repeat absolute top-[-1px] left-1/2 translate-x-[-50.06%] translate-y-0 overflow-hidden z-[1]" />
        <div className="flex w-[784px] flex-col gap-[25px] items-center shrink-0 flex-nowrap relative z-[2]">
          <div className="flex flex-col gap-[7px] items-center self-stretch shrink-0 flex-nowrap relative z-[3]">
            <span className="flex w-[784px] h-[160px] justify-center items-start self-stretch shrink-0 font-['Acme'] text-[64px] font-bold leading-[80px] text-[#00247b] relative text-center z-[4]">
              Redefining How Medicine Finds Answers
            </span>
            <span className="flex w-[582px] h-[50px] justify-center items-start shrink-0 font-['Lufga'] text-[20px] font-normal leading-[25px] text-[#273560] relative text-center z-[5]">
              Evidence based, AI driven and user optimized clinical decision
              support solution
            </span>
          </div>
          <div className="flex w-[444px] gap-[22px] items-center shrink-0 flex-nowrap relative z-[6]">
            <div className="flex w-[219px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#000] rounded-[5px] relative z-[7]">
              <span className="h-[22px] shrink-0 basis-auto font-['Spartan'] text-[20px] font-medium leading-[22px] text-[#fff] relative text-left whitespace-nowrap z-[8]">
                Secure Your Spot!
              </span>
            </div>
            <div className="flex w-[203px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[5px] border-solid border border-[#000] relative z-[9]">
              <span className="h-[22px] shrink-0 basis-auto font-['Spartan'] text-[20px] font-medium leading-[22px] text-[#000] relative text-left whitespace-nowrap z-10">
                Discover DrInfo!
              </span>
            </div>
          </div>
        </div>
      </div>
      <Querysection/>
    </div>
  );
};

export default HeroSection;
