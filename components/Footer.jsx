import { Linkedin, Twitter } from "lucide-react";

export const Footer = ({ className, ...props }) => {
  return (
    <div
      className={"bg-[#1f2937] h-[808px] relative overflow-hidden " + className}
    >
      <div
        className="flex flex-row gap-[359px] items-end justify-start absolute left-[50%] top-[735px]"
        style={{ translate: "-50%" }}
      >
        <div className="text-[#ffffff] text-center font-['Lufga-Regular',_sans-serif] text-xl font-normal relative">
          © 2025 Dr.Info AI. All rights reserved.&quot;{" "}
        </div>
      </div>
      <div className="text-[#ffffff] text-left font-['Spartan-SemiBold',_sans-serif] text-[40px] font-semibold absolute left-[101px] top-[79px]">
        Dr.Info{" "}
      </div>
      <div className="text-[#ffffff] text-left font-['Lufga-SemiBold',_sans-serif] text-[40px] font-semibold absolute left-[101px] top-[147px] w-[696px]">
        Redef﻿ining How Medicine Finds Answers{" "}
      </div>
      <div
        className="bg-[#eff4ff] rounded-[10px] border-solid border-[#ffffff] border-2 pt-2.5 pr-2 pb-2.5 pl-2 flex flex-row gap-2 items-center justify-center absolute left-[82px] top-[727px]"
        style={{
          boxShadow: "inset 0px 0px 18.9px 0px rgba(55, 113, 254, 1.00)",
        }}
      >
        <div className="text-left font-['-',_sans-serif] text-xl font-normal relative">
          <span>
            <span className="developed-by-synduct-span">Developed by</span>
            <span className="developed-by-synduct-span2">{' '}</span>
            <span className="developed-by-synduct-span3">Synduct!</span>
          </span>{" "}
        </div>
      </div>
      <img
        className="w-[1767px] h-0 absolute left-0 top-[701px] overflow-visible"
        src="vector-4530.svg"
      />
      <div
        className="text-[#ffffff] text-center font-['Lufga-SemiBold',_sans-serif] text-2xl font-semibold absolute left-[731px] top-[352px]"
        style={{ opacity: "0.7" }}
      >
        Product{" "}
      </div>
      <div
        className="text-[#ffffff] text-left font-['Lufga-Regular',_sans-serif] text-xl font-normal absolute left-[963px] top-[412px] overflow-hidden"
        style={{
          opacity: "0.5",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        About{" "}
      </div>
      <div
        className="text-[#ffffff] text-left font-['Lufga-Regular',_sans-serif] text-xl font-normal absolute left-[1147px] top-[412px] overflow-hidden"
        style={{
          opacity: "0.5",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Legal Notice{" "}
      </div>
      <div
        className="text-[#ffffff] text-left font-['Lufga-Regular',_sans-serif] text-xl font-normal absolute left-[1147px] top-[529px] overflow-hidden"
        style={{
          opacity: "0.5",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Acceptable Use Policy{" "}
      </div>
      <div
        className="text-[#ffffff] text-left font-['Lufga-Regular',_sans-serif] text-xl font-normal absolute left-[963px] top-[452px] overflow-hidden"
        style={{
          opacity: "0.5",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Contact{" "}
      </div>
      <div
        className="text-[#ffffff] text-left font-['Lufga-Regular',_sans-serif] text-xl font-normal absolute left-[1147px] top-[452px] overflow-hidden"
        style={{
          opacity: "0.5",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Privacy Policy{" "}
      </div>
      <div
        className="text-[#ffffff] text-left font-['Lufga-Regular',_sans-serif] text-xl font-normal absolute left-[731px] top-[404px] overflow-hidden"
        style={{
          opacity: "0.5",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        How It Works{" "}
      </div>
      <div
        className="text-[#ffffff] text-left font-['Lufga-Regular',_sans-serif] text-xl font-normal absolute left-[963px] top-[492px] overflow-hidden"
        style={{
          opacity: "0.5",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Career{" "}
      </div>
      <div
        className="text-[#ffffff] text-left font-['Lufga-Regular',_sans-serif] text-xl font-normal absolute left-[1147px] top-[492px] overflow-hidden"
        style={{
          opacity: "0.5",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Terms of Service{" "}
      </div>
      <div
        className="text-[#ffffff] text-center font-['Lufga-SemiBold',_sans-serif] text-2xl font-semibold absolute left-[955px] top-[352px]"
        style={{ opacity: "0.7" }}
      >
        Company{" "}
      </div>
      <div
        className="text-[#ffffff] text-center font-['Lufga-SemiBold',_sans-serif] text-2xl font-semibold absolute left-[1147px] top-[352px]"
        style={{ opacity: "0.7" }}
      >
        Legal{" "}
      </div>
      <div
        className="text-[#ffffff] text-center font-['Lufga-SemiBold',_sans-serif] text-2xl font-semibold absolute left-[1421px] top-[352px]"
        style={{ opacity: "0.7" }}
      >
        Social{" "}
      </div>
      <div className="absolute left-[1421px] top-[404px] flex gap-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            size={32}
            color="#ffffff"
            className="opacity-50 hover:opacity-100 transition-opacity"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter
            size={32}
            color="#ffffff"
            className="opacity-50 hover:opacity-100 transition-opacity"
          />
        </a>
      </div>
    </div>
  );
};
