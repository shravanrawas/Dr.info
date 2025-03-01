const HeroSection = () => {
  return (
    <div className="main-container flex w-[1729px] h-[988px] pt-[265px] pr-[360px] pb-[265px] pl-[360px] flex-col gap-[8px] justify-center items-center flex-nowrap relative mx-auto my-0">
    <div className="w-[1728px] h-[988px] shrink-0 bg-[url(https://static.codia.ai/image/2025-03-01/804fa18a-d126-413e-a4b3-b279ecce0382.png)] bg-cover bg-no-repeat absolute top-0 left-1/2 translate-x-[-49.8%] translate-y-0 overflow-hidden">
      <div className="flex w-[1000px] flex-col gap-[50px] items-center flex-nowrap relative z-[1] mt-[344.5px] mr-0 mb-0 ml-[360.5px]">
        <div className="flex flex-col gap-[7px] items-center self-stretch shrink-0 flex-nowrap relative z-[2]">
          <span className="h-[80px] self-stretch shrink-0 basis-auto font-['Lufga'] text-[64px] font-semibold leading-[80px] text-[#00247b] relative text-center whitespace-nowrap z-[3]">
            Learn About DrInfo.Ai
          </span>
          <span className="flex w-[1000px] h-[120px] justify-center items-start self-stretch shrink-0 font-['Source_Sans_Pro'] text-[32px] font-light leading-[40.224px] text-[#000] relative text-center z-[4]">
            Discover how DrInfo.Ai optimize the way healthcare professionals
            access trusted, evidence-based medical information, empowering
            them to make better decisions, faster.
          </span>
        </div>
        <div className="flex w-[323px] gap-[22px] items-center shrink-0 flex-nowrap relative z-[5]">
          <div className="flex w-[146px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#000] rounded-[5px] relative z-[6]">
            <span className="h-[22px] shrink-0 basis-auto font-['Spartan'] text-[20px] font-medium leading-[22px] text-[#fff] relative text-left whitespace-nowrap z-[7]">
              Contact Us
            </span>
          </div>
          <div className="flex w-[155px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[5px] border-solid border border-[#000] relative z-[8]">
            <span className="h-[22px] shrink-0 basis-auto font-['Spartan'] text-[20px] font-medium leading-[22px] text-[#000] relative text-left whitespace-nowrap z-[9]">
              Get Started
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HeroSection;
