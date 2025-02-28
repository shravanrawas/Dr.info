import React, { useState } from "react";

const HowToUseSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Your Query",
      description:
        "Enter your clinical question or keyword into our intuitive search bar to access a wealth of AI-filtered medical information.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/c6c31ffcce5cc1e42c9772b48365abcf707d65c312ada090fb7409425512a904?placeholderIfAbsent=true",
    },
    {
      id: 2,
      title: "Latest Guidelines",
      description:
        "Link and AI empowered summary to the latest guidelines",
      image:
        "https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/c6c31ffcce5cc1e42c9772b48365abcf707d65c312ada090fb7409425512a904?placeholderIfAbsent=true",
    },
    {
      id: 3,
      title: "Latest PubMed results",
      description:
        "Getting the latest information with pre-filtered PubMed results and search functionality",
      image:
        "https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/c6c31ffcce5cc1e42c9772b48365abcf707d65c312ada090fb7409425512a904?placeholderIfAbsent=true",
    },
    {
      id: 4,
      title: "Bespoke AI summary",
      description:
        "AI-powered summaries of peer-reviewed journals and trusted sites including exact referencing",
      image:
        "https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/c6c31ffcce5cc1e42c9772b48365abcf707d65c312ada090fb7409425512a904?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center px-20 py-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1109px]">
        <header className="flex flex-col self-center max-w-full text-center text-slate-700 w-[453px]">
          <h2 className="text-5xl font-medium max-md:max-w-full max-md:text-4xl">
            How to use DrInfo!
          </h2>
          <p className="self-center text-base leading-6">
            Simplify your search with a seamless process designed for healthcare excellence.
          </p>
        </header>

        <div className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-wrap gap-6 items-center w-full max-md:max-w-full cursor-pointer"
              onClick={() => setActiveStep(step.id)}
            >
              <div
                className={`flex grow shrink self-stretch my-auto rounded-xl h-[66px] w-[7px] transition-all duration-300 ${
                  activeStep === step.id ? "bg-blue-500" : "bg-blue-200 blur-sm"
                }`}
              />
              <div className="grow shrink self-stretch my-auto min-w-60 w-[1076px] max-md:max-w-full">
                <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
                  <span
                    className={`grow shrink self-stretch my-auto text-8xl font-bold text-center transition-all duration-300 ${
                      activeStep === step.id ? "text-blue-100" : "text-gray-300"
                    } w-[82px] max-md:text-4xl`}
                  >
                    {step.id < 10 ? `0${step.id}` : step.id}
                  </span>
                  <div
                    className={`flex flex-wrap grow shrink gap-10 justify-between items-start self-stretch my-auto min-w-60 text-slate-700 w-[897px] max-md:max-w-full transition-all duration-300 ${
                      activeStep === step.id ? "opacity-100" : "opacity-50 blur-sm"
                    }`}
                  >
                    <h3 className="w-50 text-3xl font-semibold text-center">
                      {step.title}
                    </h3>
                    <p className="text-xl w-[365px]">{step.description}</p>
                  </div>
                </div>
                <img
                  src={step.image}
                  alt={step.title}
                  className={`object-contain mt-5 max-w-full w-[1051px] transition-all duration-50 ${
                    activeStep === step.id ? "opacity-100" : "opacity-50 blur-sm"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
