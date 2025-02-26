import React from "react";

function EmpowerSection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-36 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="w-full max-w-[1485px] max-md:max-w-full">
        <div className="flex gap-5 items-stretch max-md:flex-col">
         
          <div className="w-6/12 max-md:w-full flex items-stretch">
            <div
              style={{
                backgroundImage: "url('/images/empowerbg.svg')",
              }}
              className="flex flex-col justify-center p-10 text-xl bg-cover bg-center rounded-xl w-full min-h-[511px] max-md:max-w-full"
            >
              <h2 className="text-5xl font-medium text-slate-700 max-md:text-4xl">
                Empowering Physicians with Precision Information
              </h2>
              <p className="mt-6 font-light leading-8 text-black">
                Navigating medical information can be overwhelming—endless
                publications, evolving guidelines, and unreliable search engine
                results can make decision-making difficult. DrInfo.AI simplifies
                this process by providing exactly referenced, peer-reviewed
                content that ensures physicians receive quick, accurate, and
                trustworthy information in one glance.
              </p>
              <button className="self-start px-4 py-2.5 mt-6 text-white rounded-md bg-slate-800">
                Get Started
              </button>
            </div>
          </div>

        
          <div className="w-6/12 max-md:w-full flex items-stretch">
            <div
              className="flex flex-col justify-center items-center p-10 w-full min-h-[511px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: "url('/images/em2.svg')" }}
            >
              <h2 className="text-3xl font-medium text-center text-slate-700 max-md:max-w-full">
                Why Physicians Choose{" "}
                <span className="text-[#004AFF]">DrInfo.AI</span>
              </h2>

              <div className="flex flex-col items-center mt-7 w-full">
              
                <article className="flex flex-col w-full text-center">
                  <p className="p-2 text-xl font-light text-black">
                    <strong className="font-medium text-[#263969]">
                      Cut Through Information Overload
                    </strong>{" "}
                    Get concise, evidence-based summaries without sifting
                    through countless sources.
                  </p>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/86c460587df7f30865a52b29c215651daea5fd075a97403d7f5e3b87c8c66488?placeholderIfAbsent=true"
                    alt="Information overload solution"
                    className="object-contain w-full rounded-[80px] mt-2"
                  />
                </article>

               
                <article className="flex flex-col items-center mt-5 text-xl font-light text-center text-black">
                  <p className="p-2 w-full">
                    <strong className="font-medium text-[#263969]">
                      Trustworthy & Referenced
                    </strong>{" "}
                    Extract precision information from guidelines, European
                    Medicine Agency drug data, and pre-filtered PubMed results
                    with confidence.
                  </p>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/d6002bacc16b4b209ad6806dbb5e9e08/9a210e6c850ee91569db6145cab21ef7831df584920937a4cda6c5c572229d0e?placeholderIfAbsent=true"
                    alt="Trustworthy references"
                    className="object-contain mt-2 rounded-[80px]"
                  />
                </article>

              
                <p className="p-2 mt-5 text-xl font-light text-center text-black">
                  <strong className="font-medium text-[#263969]">
                    Faster, Smarter Decisions
                  </strong>{" "}
                  Save time and enhance patient care with reliable, AI-powered
                  medical intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmpowerSection;
