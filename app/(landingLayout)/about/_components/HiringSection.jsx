const HiringSection = () => {
    return (
      <section style={{
        backgroundImage: "url('/images/CTAbg.svg')",
      }} className="flex relative flex-col justify-center px-96 py-48 w-full min-h-[637px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex z-0 flex-col self-center w-full max-w-[812px] max-md:max-w-full">
          <div className="w-full text-center max-md:max-w-full">
            <h2 className="text-5xl font-semibold text-slate-800 max-md:max-w-full max-md:text-4xl">
              We're Hiring
            </h2>
            <p className="mt-3.5 text-2xl font-light text-slate-700 max-md:max-w-full">
              We're building something transformative in healthcare, and we need
              passionate innovators to join us. If you care deeply about quality
              and impact, let's build the future together.
            </p>
          </div>
          <div className="flex gap-6 items-center self-center mt-6 max-w-full text-xl text-white w-[266px]">
            <button className="gap-2 self-stretch px-4 py-2.5 my-auto rounded-md bg-slate-800 min-w-60 w-[266px]">
              See open position
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default HiringSection;
  