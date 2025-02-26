const MissionSection = () => {
    return (
      <section className="flex overflow-hidden flex-col items-center px-20 pt-1 pb-40 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col -mb-8 max-w-full w-[964px] max-md:mb-2.5">
          <div className="flex flex-col self-end max-w-full w-[933px]">
            <div className="flex flex-col items-center w-full max-md:max-w-full">
              <div className="flex max-w-full min-h-[90px] w-[532px]" />
            </div>
            <div className="flex flex-col self-center max-w-full text-center w-[835px]">
              <div className="self-center max-w-full w-[624px]">
                <h2 className="text-5xl font-medium text-blue-900 max-md:max-w-full max-md:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-1 text-2xl text-blue-800 max-md:max-w-full">
                  "Empowering healthcare professionals with evidence-based
                  precision information."
                </p>
              </div>
              <div className="flex-1 shrink gap-2 self-stretch p-2 mt-3.5 w-full text-2xl leading-9 basis-0 text-zinc-500 max-md:max-w-full">
                <p>
                  We recognize the importance of having access to the most
                  reliable, up-to-date publications and clinical guidelines.
                  Whether you need information about managing or treating a
                  disease or drug information, DrInfo.ai equips you with the
                  Information needed to make informed decisions, enhance patient
                  care, and save valuable time.
                </p>
                <p className="mt-4">And we're just getting started.</p>
              </div>
            </div>
          </div>
          <div className="mt-20 w-full text-center min-h-[343px] max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <h2 className="text-5xl font-medium text-blue-900 max-md:max-w-full max-md:text-4xl">
                A Vision of Smarter, Evidence-Based Care
              </h2>
              <p className="self-center mt-7 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
                At DrInfo.Ai, we envision a future where healthcare professionals
                have immediate access to the most accurate, and relevant
                information at their fingertips, enabling them to make the best
                possible clinical decisions. Our AI-powered platform aims to
                become the gold standard for stand alone clinical decision support
                systems, enhancing the quality of healthcare worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MissionSection;
  