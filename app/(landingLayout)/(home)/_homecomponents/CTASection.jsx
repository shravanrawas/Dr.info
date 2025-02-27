import React from "react";

function CTASection() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/CTABg.png')",
      }}
      className="relative px-40 py-56 w-full min-h-[637px] max-md:px-5 max-md:py-24 max-md:max-w-full"
    >
      <div className="flex z-0 flex-col max-w-full w-[1382px]">
        <h2 className="text-5xl font-semibold text-center text-slate-800 max-md:max-w-full max-md:text-4xl">
          Ready to enhance your clinical decision making with digitally
          empowered information
        </h2>
        <div className="flex justify-center gap-6 mt-9 text-xl max-md:flex-col max-md:gap-4">
          <button className="px-6 py-3 rounded-md border border-slate-800 text-slate-800">
            Schedule a Demo
          </button>
          <button className="px-6 py-3 text-white rounded-md bg-slate-800">
            Get Started for Free
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
