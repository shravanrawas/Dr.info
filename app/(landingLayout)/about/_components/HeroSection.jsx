const HeroSection = () => {
  return (
      <section
          className="relative flex flex-col justify-center items-center px-96 py-80 w-full min-h-[988px] max-md:px-5 max-md:py-24 max-md:max-w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/aboutBg.svg')" }}
      >
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="relative flex flex-col w-full max-w-[1000px] max-md:max-w-full text-center">
              <h2 className="text-6xl font-semibold leading-none text-blue-900 max-md:max-w-full max-md:text-4xl">
                  Learn About DrInfo.Ai
              </h2>
              <p className="mt-2 text-3xl font-light text-black max-md:max-w-full">
                  Discover how DrInfo.Ai optimizes the way healthcare professionals
                  access trusted, evidence-based medical information, empowering them
                  to make better decisions, faster.
              </p>
              <div className="flex gap-6 items-center self-center mt-12 text-xl font-medium max-md:mt-10">
                  <button className="gap-2 self-stretch px-4 py-2.5 my-auto text-white bg-black rounded-md">
                      Contact Us
                  </button>
                  <button className="gap-2 self-stretch px-4 py-2.5 my-auto text-black rounded-md border border-black border-solid">
                      Get Started
                  </button>
              </div>
          </div>
      </section>
  );
};

export default HeroSection;
